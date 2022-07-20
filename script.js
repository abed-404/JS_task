function generateCard(el,arrId){
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
    idHidden.setAttribute("id",el.id);
    idHidden.setAttribute("class","hidden");
    ttl.setAttribute("class","title");
    auth.setAttribute("class","author");
    div.appendChild(img);
    div.appendChild(ttl);
    div.appendChild(auth);
    div.appendChild(idHidden);
   
    div.setAttribute("class", "book");
    if (arrId === "home"){
        btn.setAttribute("class","fas fa-heart");
        btn.addEventListener('click',e=>{
            addToFavorites(el)
        });
        div.appendChild(btn);
        document.getElementById("books").appendChild(div);
    }
    else {
        btn.setAttribute("class","fas fa-trash");
        btn.addEventListener('click',e=>{
            removeFromFavorites(el)
        });
        div.appendChild(btn);
        document.getElementById("fav").appendChild(div);
    }
}

function renderBooks(arr,id){
    arr.map((el)=>{generateCard(el,id)});
}

function addToFavorites(el){
    favorites = JSON.parse(localStorage.getItem("favorites"));
    favorites.push(el);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function removeFromFavorites(el){
    console.log(el.id);
    favorites = JSON.parse(localStorage.getItem("favorites"));
    const removeId = el.id;
    const i = favorites.findIndex((elem) => elem.id === removeId );
    if (i !== -1){
        favorites.splice(i,1);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    location.reload();
    //updateDiv();
}

//function updateDiv(){ 
//    $( "#fav" ).load(window.location.href + " #fav" );
//    }