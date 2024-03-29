:data-bg:> images/5498393620_b4990431c6_b.jpg
:data-attribution:> http://www.flickr.com/photos/s3a/5498393620/

# Liberating Events

---

## Events can be Free

- Almost all implementations of events involve binding event handlers for a named event on a particular object.
- Consider what might be possible if events could run free?

---

## Eve can liberate events

- Eve will allow you to create a more loosely coupled app than you might have previously thought possible.
- Understand that eve embraces Javascript.

---

## Example: Mapping Key Events

Consider the following (somewhat contrived) example:

```js
function captureKey(evt) {
    eve(
        'evematrix.key',
        evt.target,
        String.fromCharCode(evt.charCode)
    );
}

document.addEventListener('keypress', captureKey, true);
```

That's our core application!

---

## Black Screen of Awesome

<http://snurl.com/evedemo>

---

## Our First Extension: Motion

```js
// let's write a key handler to do something
eve.on('evematrix.key', function(key) {
    // create a new span element

    // after a period of time, add a transform that will
    // move the span element off the screen
    setTimeout(function() {
        stylar(span).set(
            'transform', 
            'translate(0px, ' + (window.innerHeight + 100) + 'px)'
        );
    }, 50);
    
    // hacky - after the transition has executed remove it
    setTimeout(function() {
        document.body.removeChild(span);
    }, 1700);
});
```

---

## Extension Two: Network Comms

```js
var socket = new WebSocket('ws://mymagicmachine:8001/');

// once the socket is opened
socket.onopen = function() {
    eve.on('*', function() {
        // if the scope is the websocket, abort
        if (this === socket) return;
        
        socket.send(eve.nt() + '|' + 
            Array.prototype.join.call(arguments, '|'));
    });
};

socket.onmessage = function(evt) {
    // when we receive a message, break it up and map it to eve
    var args = evt.data.split('|');
    
    // trigger even
    eve.apply(eve, [args[0], socket].concat(args.slice(1)));
};
```

---

## Extension Three: Color Me Lime

```js
var children = document.body.children;

eve.on('evematrix.key', function() {
    if (!(this instanceof WebSocket)) {
        // get the last child and apply the mytext class
        children[children.length - 1].classList.add('mytext');
    }
})(10);
```

---

## Eve Gotchas

- Namespace your events!
- Learn you some Javascript.

---

:data-bg:> images/6968108915_88369197b2_o.jpg
:data-attribution:> http://www.flickr.com/photos/32482342@N05/6968108915/

# Embrace your Freedom!