# observeEntry
A tiny library to observe elements entering the viewport using Intersection Observer.

## API


```js
import observeEntry from 'path/to/file';

// call the function directly
observeEntry( '.my-element' );

// assing to variable to get the object
const observer = observeEntry( '.my-element' );
console.log( observer );
```

## Config

Rather than passing a string, you can pass a config object, using the options available in the Intersection Observer API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer

Optionally, choose the class you want applied to the element when it is visible, 


```js
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
  intersectingClass: 'is-intersected',
  selector: '.my-element'
}

observeEntry( options );
```
