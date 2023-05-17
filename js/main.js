
/****************************/
/* Find elements in the DOM */
/* **************************/

const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "Hello LoopeyTunes!";
console.log(mainTitle); // <h1 id="main-title">Hello World!</h1>
console.dir(mainTitle); // > h1#main-title

const infoCollection = document.getElementsByClassName("info")
console.log(infoCollection)
// HTMLCollection
// not an array

// convert it to an array to be iteratable
const infoCollectionArray = [...infoCollection]

infoCollectionArray.forEach(elementDOM => {
    console.log(elementDOM)

    // access css properties
    elementDOM.style.backgroundColor = "blue" // background-color css property
    // notice that css properties can be accessed using their camelCase syntax counterpart
    elementDOM.style.background
    // ElementCSSInlineStyle.style
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
    // https://code.visualstudio.com/docs/editor/intellisense
})

const infoCollection2 = document.getElementsByTagName("p")

const first = document.querySelector("header h2") // returns only the first element matching the selector
const all = document.querySelectorAll("header h2")
// these methods return a NodeList, which is closer to an array, because it has the iterable method forEach

console.log(all)

/**************/
/* Properties */
/**************/

// .className
mainTitle.className = "title rounded" // override existing class(es)
// .classList
// .classList.remove("foo");
// .classList.add("new-class")
// .classList.toggle("active")

/**************/
/* Attributes */
/**************/

// .getAttribute(attributeName);
// const result = linkElm.getAttribute("href");
// console.log(result)

// modify or create: elm.setAttribute(name, value);
// linkElm.setAttribute("href", "https://ironhack.com");
// linkElm.setAttribute("target", "_blank");

// .removeAttribute(attributeName)

/*********************/
/* Create a DOM node */
/*********************/

// step1
const newImg = document.createElement("img"); // orphan not in the HTML DOM

// step2
newImg.setAttribute("src", "./images/pikachu.jpg");
newImg.setAttribute("alt", "beautiful pikachu image");

const parentElm = document.getElementById("pikachu");
parentElm.appendChild(newImg)
// appends at the end of the parent element // there is also the prepend equivalent method




/**************/
/**************/
/*   Events   */
/**************/
/**************/

/*

Examples of events:
- Document (DOMContentLoaded, ...)
- mouse events (ex. click, mouseover...)
- keyboard events (ex. keydown, keypress, keyup)

elm.addEventListener("click", doSomething);
elm.addEventListener("click", function(){});
elm.addEventListener("click", () => {});

*/


const btnElm = document.getElementById("btn-add");

btnElm.onclick = function() {
    console.log('click');
};

const btn = document.getElementById("button-1");

btn.addEventListener("click", () => {
    console.log("user clicked")   
});

btn.addEventListener("click", () => {
    console.log("user clicked!!! 👍");
    // step1
    const newParagraph = document.createElement("p");
    // step2
    newParagraph.innerText = "This is my new paragraph"
    // step 3
    const parentElmPikachu = document.getElementById("pikachu");
    parentElmPikachu.appendChild(newParagraph);
})

// pratice exercise
// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
// https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values

document.addEventListener("keydown", (event) => {
    console.log(event)

    if (event.code === 'Space') {
        console.log("keyboard's spacebar pressed ⌨️")

        const divNew = document.createElement("div");
        divNew.innerText = "HELLO WORLD"
        divNew.id = "pikapika"
        const parentElmPikachu = document.getElementById("pikachu");
        parentElmPikachu.appendChild(divNew);
    }
    else if (event.code === 'ArrowUp') {
        console.log("keyboard's arrow up pressed 🔼")

        const pika = document.getElementById("pikapika")
        pika.style.position = "relative"
        
        console.log(pika.style.top)
        
        if (pika.style.top === '') pika.style.top = 0
        else pika.style.top = Number(pika.style.top.slice(0, -2)) - 10 + 'px'
    }
    else console.log(event.code)
  });

/*************************************/
/* Attach event to multiple elements */
/*************************************/

const allBtn = document.querySelectorAll(".btn");

allBtn.forEach( (elm) => {
    elm.addEventListener("click", (event) => {
        console.log("user clicked some button");
        console.dir(event.target);
        console.log(event.target);
    });
});

// event bubbling
document.addEventListener("click", () => {
    console.log("user clicked somewhere in document")
})

/*************************************************/
/* Detect Events on elements created dynamically */
/*************************************************/

/*

One option, using event bubbling: 
https://stackoverflow.com/a/34896325/11298742

*/

/**********/ 
/* Inputs */
/**********/ 

const calcBtn = document.getElementById("calculate-btn");
calcBtn.addEventListener("click", () => {
    const priceElm = document.getElementById("price");
    console.log(priceElm.value); // returns a string
});