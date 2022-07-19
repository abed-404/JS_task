let books = [
    {
        id:1,
        title: "The complete English poems",
        author: "Samuel Johnson",
        edition: 33,
        image: "https://covers.openlibrary.org/b/id/9708321-L.jpg"
    },
    {
        id:2,
        title: "The power of habit",
        author: "Charles Duhigg",
        edition: 13,
        image: "https://covers.openlibrary.org/b/id/12577855-L.jpg"
    },
    {
        id:3,
        title: "Rich dad, poor dad",
        author: "Robert T. Kiyosaki",
        edition: 58,
        image: "https://covers.openlibrary.org/b/id/12779582-L.jpg"
    },
    {
        id:4,
        title: "Off the Edge",
        author: "Kelly Weill",
        edition: 3,
        image: "https://covers.openlibrary.org/b/id/12649434-L.jpg"
    }
];
////
let favorites =[{
    title: "Off the Edge",
    author: "Kelly Weill",
    edition: 3,
    image: "https://covers.openlibrary.org/b/id/12649434-L.jpg"
}];

function generateCard(el){
    const div = document.createElement("div");
    const img = document.createElement("img");
    const ttl = document.createElement("h5");
    const auth = document.createElement("h6");
    const btn = document.createElement("button");
    const idHidden=document.createElement('input')

    img.src = el.image;
    img.alt = "Image Not Found !";
    ttl.innerText = el.title;
    auth.innerText = el.author;
    btn.innerText = "+";
    idHidden.setAttribute("id",el.id)
    idHidden.setAttribute("class","hidden")

    ttl.setAttribute("class","title");
    auth.setAttribute("class","author");
    btn.setAttribute("class","fas fa-heart");
    btn.setAttribute("id",ttl);
    

    div.appendChild(img);
    div.appendChild(ttl);
    div.appendChild(auth);
    div.appendChild(btn);
    div.appendChild(idHidden)
   
    div.setAttribute("class", "book");
    
    document.getElementById("books").appendChild(div);
    // btn.onclick = addToFavorites(idHidden);
    btn.addEventListener('click',e=>{
        addToFavorites(el)
    })
}
    
books.map((el)=>{generateCard(el)});

/// favorites

function generateFavoriteCard(el){
    const div = document.createElement("div");
    const img = document.createElement("img");
    const ttl = document.createElement("h5");
    const auth = document.createElement("h6");
    const btn = document.createElement("button");

    img.src = el.image;
    img.alt = "Image Not Found !";
    ttl.innerText = el.title;
    auth.innerText = el.author;
    btn.innerText = "-";

    ttl.setAttribute("class","title");
    auth.setAttribute("class","author");
    btn.setAttribute("class","fas fa-heart");
    

    div.appendChild(img);
    div.appendChild(ttl);
    div.appendChild(auth);
    div.appendChild(btn);
    div.setAttribute("class", "book");
}

function addToFavorites(idHidden){
    favorites.push(idHidden);
    localStorage
    console.log(favorites)
}
 if(favorites.length !== 0){
    favorites.map((el)=>{generateFavoriteCard(el)});
}
//let testButton = document.querySelector("button");
//testButton.onclick = ()=>{
//    console.log("Clicked");
//}
/*
function addImageCellEvents(img) {
    img.addEventListener("mouseover", function() {
      img.childNodes[0].width = 90;
    }); 
    img.addEventListener("mouseout", function() {
      img.childNodes[0].width = 70;
    }); 
  };
  */