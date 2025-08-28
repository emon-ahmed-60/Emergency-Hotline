### getElementById vs getElementsByClassName vs querySelector vs querySelectorAll
getElementById: Finds a single element by its unique id. It's the fastest method.

getElementsByClassName: Finds all elements with a specific class name. Returns a live HTMLCollection.

querySelector: Finds the first element that matches a CSS selector. Versatile and modern.

querySelectorAll: Finds all elements that match a CSS selector. Returns a static NodeList.

### How to Create and Insert a New Element
Create: document.createElement('div')

Add content: newDiv.innerText = 'Hello'

Insert: parent.appendChild(newDiv) 

### Event Bubbling
An event on an element first triggers on that element, then "bubbles up" to its parent, then the parent's parent, and so on, up the DOM tree.

< div id="parent">
  < button id="child">Click Me</ button>
</ div>
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

Here, if you click on the child button, it will first go to child → then parent → then document.

### Event Delegation
Instead of adding a listener to every child element, you add a single listener to a parent element. The listener uses event bubbling to detect which child was clicked.

Useful because: It improves performance and works automatically for dynamically added elements.

### preventDefault() vs stopPropagation()
preventDefault(): Stops the browser's default action for an event.

stopPropagation(): Stops the event from bubbling up the DOM tree to parent elements.