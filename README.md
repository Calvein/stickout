Stickout
========

Stickout is a [jQuery][] plugin, which works well with the [Twitter bootstrap][], to stick things.
Stickout is not a polyfill for the new [position: sticky][], it emulates the sticky effect from some mobiles Apps (Google Now, Google+…).
Just [try it][], scroll down the example and then, scroll up.

Usage
-----

### Via data attributes

To easily add stickout behavior to an element, just add `data-spy="stickout"` to the element you want to spy on.

```html
<div data-spy="stickout">...</div>
```

### Via JavaScript

Call the stickout via JavaScript

```javascript
$('#el').stickout(options)
```

### Options

Options can be passed via data attributes or JavaScript. For data
attributes, append the option name to `data-`, as in `data-offset=""`.

<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 100px;">Name
            <th style="width: 50px;">type
            <th style="width: 200px;">default
            <th>description
    </thead>
    <tbody>
        <tr>
            <td>top
            <td>number
            <td>20
            <td>The `top` of the element when fixed.
        <tr>
            <td>offset
            <td>number
            <td>The `$.fn.outerHeight(true)` of the sticked element + 20
            <td>The offset when you start to scroll up.
        <tr>
            <td>placeholder
            <td>string
            <td>‘stickout-placeholder’
            <td>The `class` attribute for the placeholder element which is a clone of
                the sticked element.
        <tr>
            <td>shown
            <td>string
            <td>‘stickout-shown’
            <td>The `class` attribute which will be added when the element is shown (when
                you scroll up).
        <tr>
            <td>fixed
            <td>string
            <td>‘stickout-fixed’
            <td>The `class` attribute which will be added when the element is fixed.
    </tbody>
</table>

**Heads up!** Options for individual stickout can alternatively be specified through the use of data attributes.


### CSS

Stickout will automatically set appropriate values of the `position` and
`top` CSS properties on the element. As seen in the [options][], you can
specify classes for the different states of the stickout, here is the
basic CSS you should use for.

```css
.stickout-placeholder {
    filter: alpha(opacity=0);
                opacity: .0;
}
.stickout-shown {
    box-shadow: 0 5px 10px hsla(0, 0%, 0%, .5);
}
```

### Methods
#### .stickout(’destroy’)
Destroys the stickout behavior on the element

#### .stickout(’init’)
Initialize stickout (by default when stickout is launch the first time).
Can be use to reinitialize stickout after the `destroy` methods is
called.

### Events
Bootstrap’s modal class exposes a few events for hooking into modal
functionality.

<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 150px;">Event</th>
            <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>shown
            <td>This event fires when the sticked element is shown, so basically, when you scroll up.
        <tr>
            <td>fixed
            <td>This event fires when the sticked element became fixed.
        <tr>
            <td>static
            <td>This event fires when the sticked element take back is initial position.
    </tbody>
</table>

  [jQuery]: http://jquery.com
  [Twitter bootstrap]: http://getbootstrap.com
  [position: sticky]: http://updates.html5rocks.com/2012/08/Stick-your-landings-position-sticky-lands-in-WebKit
  [try it]: #example
  [Tweet]: https://twitter.com/share
  [options]: #options
