/* ==========================================================
 * jquery.stickout.js v1.0.1
 * http://calvein.github.com/stickout
 * ==========================================================
 * By François Robichet http://francois.robichet.com or @calvein pretty much everywhere
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: 2012-09-27T23:11:38.925216+02:00
 * ========================================================== */


!function($) {

    "use strict"; // Here some spare semi-colon for people who like them ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

   /* STICKOUT CLASS DEFINITION
    * ========================= */

    var Stickout = function(el, options) {
        this.$el = $(el)
        $.fn.stickout.defaults.offset = this.$el.outerHeight(true) + 20
        this.options = $.extend({}, $.fn.stickout.defaults, options)
        this.$fakeEl
        this.scrollPosition = 0
        this.init()
    }

    Stickout.prototype = {

        constructor: Stickout

      , init: function() {
            this.$fakeEl = this.$el
            .clone()
            .removeAttr('data-spy')
            .addClass(this.options.placeholder)
            .insertAfter(this.$el)
            this.$el.css({
                position: 'absolute'
              , width: this.$fakeEl.width()
              , height: this.$fakeEl.height()
            })
            this.$window = $(window).on('scroll.stickout resize.stickout', $.proxy(this.checkPosition, this))
            this.checkPosition({})
        }

      , destroy: function() {
            this.$fakeEl.remove()
            this.$el
            .removeClass(this.options.shown + ' ' + this.options.fixed)
            .removeAttr('style')
            this.$window = $(window).off('scroll.stickout')
        }

      , checkPosition: function(e) {
            var scrollHeight = $(document).height()
              , scrollTop = this.$window.scrollTop()
              , position = this.$el.offset().top + this.$el.outerHeight(true)
              , fakeTop = this.$fakeEl.offset().top

            if (e.type === 'resize') {
                this.$el.css({
                    width: this.$fakeEl.width()
                  , height: this.$fakeEl.height()
                })
            }

            // Scroll top or resize
            if (this.scrollPosition > scrollTop || e.type === 'resize') {
                if (position < scrollTop) {
                    this.$el
                    .addClass(this.options.shown)
                    .removeClass(this.options.fixed)
                    .css({
                        top: scrollTop - this.options.offset
                    })
                    .trigger('shown')
                } else {
                    // Return at the initial position
                    if (fakeTop > scrollTop) {
                        if (this.$el.hasClass(this.options.shown)) {
                            this.$el
                            .removeClass(this.options.shown + ' ' + this.options.fixed)
                            .css({
                                position: 'absolute'
                              , top: fakeTop
                            })
                            .trigger('static')
                        }
                    // Set the element into fixed position
                    } else if (
                        scrollTop - this.options.top <= parseInt(this.$el.css('top'), 10) &&
                        this.$el.hasClass(this.options.shown)
                    ) {
                        this.$el
                        .addClass(this.options.fixed)
                        .css({
                            position: 'fixed'
                          , top: this.options.top
                        })
                        .trigger('fixed')
                    }
                }
            // Scroll bottom
            } else {
                if (this.$el.hasClass(this.options.fixed)) {
                    this.$el
                    .removeClass(this.options.fixed)
                    .css({
                        position: 'absolute'
                      , top: this.$el.offset().top
                    })
                }
            }

            this.scrollPosition = scrollTop
        }
    }

   /* STICKOUT PLUGIN DEFINITION
    * ========================== */

    $.fn.stickout = function(option) {
        return this.each(function() {
          var $this = $(this)
            , data = $this.data('stickout')
            , options = typeof option === 'object' && option
          if (!data) $this.data('stickout', (data = new Stickout(this, options)))
          if (typeof option === 'string') data[option]()
        })
    }

    $.fn.stickout.defaults = {
        top: 20
      , offset: null
      , placeholder: 'stickout-placeholder'
      , shown: 'stickout-shown'
      , fixed: 'stickout-fixed'
    }

   /* STICKOUT PLUGIN DEFINITION
    * ========================== */

    $(window).on('load', function() {
        $('[data-spy="stickout"]').each(function() {
            var $spy = $(this)
            $spy.stickout($spy.data('stickout'))
        })
    })


}(window.jQuery)