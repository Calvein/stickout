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

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-animation=""`.

<table class="table table-bordered table-striped">
    <thead>
        <tr>
            <th style="width: 100px;">Name</th>
            <th style="width: 50px;">type</th>
            <th style="width: 200px;">default</th>
            <th>description</th>
    </thead>
    <tbody>
        <tr>
            <td>boxShadow
            <td>string
            <td>'0 5px 10px hsla(0, 0%, 0%, .5)'
            <td>Apply the css property <code>box-shadow</code> on the element
        <tr>
            <td>offset
            <td>object
            <td>{ top: 20, hide: 40 }
            <td>The offset of the element once fixed. <code>top</code> stand for the <code>top</code> position once fixed and <code>hide</code> the position off the
                element when the user scroll to the top.
    </tbody>
</table>

**Heads up!** Options for individual stickout can alternatively be specified through the use of data attributes.

### Methods
#### .stickout(’destroy’)
Destroys the stickout behavior on the element

  [jQuery]: http://jquery.com
  [Twitter bootstrap]: http://getbootstrap.com
  [position: sticky]: http://updates.html5rocks.com/2012/08/Stick-your-landings-position-sticky-lands-in-WebKit
  [try it]: http://calvein.github.com/stickout#example