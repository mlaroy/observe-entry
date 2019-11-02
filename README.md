# observe-entry
A tiny library to observe elements entering the viewport using Intersection Observer. When the selected elements enter the viewport, a class is applied to the element for styling.

## API


```js
import observeEntry from 'path/to/file';

// call the function directly
observeEntry( '.my-element' );

// assign to variable to get the object
const observer = observeEntry( '.my-element' );
console.log( observer );
```

## Config

Rather than passing a string, you can pass a config object, using the options available in the Intersection Observer API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer

Optionally, choose the class you want applied to the element when it is visible, 

#### Default Options:
* `root: null`
* `rootMargin: '0px'`
* `threshold: 1.0`
* `intersectingClass: 'is-intersected'`


```js
const options = {
  intersectingClass: 'visible-class',
  selector: '.my-element',
  threshold: [ 0.25, 0.5, 0.75, 1.0 ]
}

observeEntry( options );
```

## Example CSS

```css
.my-element {
    opacity: 0;
    transition: opacity 1s ease;
}

.my-element.is-intersected {
    opacity: 1;
}
```
