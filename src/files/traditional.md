:data-bg:> images/5589243043_28e4b45a28_b.jpg
:data-attribution:> http://www.flickr.com/photos/pasukaru76/

# Now and Then

---

## Events are Bound to Something

- `targetObject.addEventListener`
- `targetObject.removeEventListener`

---

## Bubbling vs Capture

Consider the following code:

```js
element.addEventListener(
    'click',        // event name
    handleClick,    // event handler
    false           // event, um?!
);
```

What is that third value specifying anyway?

---

## Event Phasing: Bubbling

![](images/eventorder-bubble.png)

---

## Bubble Fiddle

<iframe style="width: 100%; height: 420px;" src="http://jsfiddle.net/DamonOehlman/LcbwB/embedded/js,html,result/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

    
---

## Event Phasing: Capture

![](images/eventorder-capture.png)

---

## Capture Fiddle

<iframe style="width: 100%; height: 420px;" src="http://jsfiddle.net/DamonOehlman/Mpyh8/embedded/js,html,result/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

