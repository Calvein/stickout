/* ==========================================================
 * jquery.stickout.js v1.0.0
 * http://calvein.github.com/stickout
 * ==========================================================
 * By François Robichet http://francois.robichet.com or @calvein pretty much everywhere
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Sep 14 19:45:00 2012
 * ========================================================== */

!function($) {

    "use strict"; // Here some spare semi-colon for people who like them ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

   /* STICKOUT CLASS DEFINITION
    * ========================= */

    var Stickout = function(el, options) {
        this.options = $.extend({}, $.fn.stickout.defaults, options)
        this.$el = $(el)
        this.$fakeEl
        this.scrollPosition = 0
        this.$window = $(window).on('scroll.stickout', $.proxy(this.checkPosition, this))
        this.init()
        this.checkPosition()
    }

    Stickout.prototype = {

        constructor: Stickout

      , init: function() {
            this.$fakeEl = $('<div>').css({
                width: this.$el.outerWidth(true)
              , height: this.$el.outerHeight(true)
            }).insertAfter(this.$el)

            this.$el.css({
                position: 'absolute'
              , width: this.$el.width()
            })
        }

      , checkPosition: function() {
            var scrollHeight = $(document).height()
              , scrollTop = this.$window.scrollTop()
              , position = this.$el.offset().top + this.$el.outerHeight(true)
              , fakeTop = this.$fakeEl.offset().top


            // Scroll top
            if (this.scrollPosition > scrollTop) {
                if (position < scrollTop) {
                    this.$el
                    .data('shown', true)
                    .css({
                        top: scrollTop - this.options.offset.hide
                      , boxShadow: this.options.boxShadow
                    })
                } else {
                    // Return at the initial position
                    if (fakeTop > scrollTop) {
                        this.$el
                        .css({
                            position: 'absolute'
                          , top: fakeTop
                          , boxShadow: 'none'
                        })
                    // Set the element into fixed position
                    } else if (scrollTop - this.options.offset.top <= parseInt(this.$el.css('top'), 10)) {
                        this.$el
                        .data('fixed', true)
                        .css({
                            position: 'fixed'
                          , top: this.options.offset.top
                        })
                    }
                }
            // Scroll bottom
            } else {
                if (this.$el.data('fixed')) {
                    this.$el
                    .data('fixed', false)
                    .css({
                        position: 'absolute'
                      , top: this.$el.offset().top
                    })
                }
            }

            this.scrollPosition = scrollTop
        }

      , destroy: function() {
            this.$fakeEl.remove()
            this.$el.removeAttr('style')
            this.$window = $(window).off('scroll.stickout')
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
        boxShadow: '0 5px 10px hsla(0, 0%, 0%, .5)'
      , offset: {
            top: 20
          , hide: 40
      }
    }

   /* STICKOUT DATA-API
    * ================= */

    $(window).on('load', function() {
        $('[data-spy="stickout"]').each(function() {
            var $spy = $(this)
              , data = $spy.data()

            data.offsetBottom && (data.offset.bottom = data.offsetBottom)
            data.offsetHide && (data.offset.hide = data.offsetHide)

            $spy.stickout(data)
        })
    })


}(window.jQuery)