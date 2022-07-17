let books = [
    {
        title: "the complete English poems",
        author: "Samuel Johnson",
        edition: 33,
        image: "https://covers.openlibrary.org/b/id/9708321-L.jpg"
    },
    {
        title: "The power of habit",
        author: "Charles Duhigg",
        edition: 13,
        image: "https://covers.openlibrary.org/b/id/12577855-L.jpg"
    },
    {
        title: "Rich dad, poor dad",
        author: "Robert T. Kiyosaki",
        edition: 58,
        image: "https://covers.openlibrary.org/b/id/12779582-L.jpg"
    },
    {
        title: "Off the Edge",
        author: "Kelly Weill",
        edition: 3,
        image: "https://covers.openlibrary.org/b/id/12649434-L.jpg"
    }
];
function addElements(books){
    const divs = [];
    const newDiv = document.createElement("div");
    
}

function addElement(){
    // create a new div element
    const newDiv = document.createElement("div");

    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
      
}
let div1 = document.createElement("div");
let image1 = document.createElement("img");
let title1 = document.createElement("h2");

image1.src = books[0].image;
title1.innerText = books[0].title;

div1.appendChild(image1);
div1.appendChild(title1);

document.getElementById("div1").appendChild(div1);