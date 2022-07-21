function generateCard(el, arrayName) {
    const {id, image, title , author}= el
    const div = document.createElement("div");
    const img = document.createElement("img");
    const ttl = document.createElement("h5");
    const auth = document.createElement("h6");
    const btn = document.createElement("button");
    const idHidden = document.createElement('input')
    img.src = image;
    img.alt = "Image Not Found !";
    ttl.innerText = title;
    auth.innerText = author;
    idHidden.setAttribute("id", id);
    idHidden.setAttribute("class", "hidden");
    ttl.setAttribute("class", "title");
    auth.setAttribute("class", "author");
    div.appendChild(img);
    div.appendChild(ttl);
    div.appendChild(auth);
    div.appendChild(idHidden);
    div.setAttribute("class", "book");

    if (arrayName === "books") {
        btn.setAttribute("class", "fas fa-heart fav-trash");
        btn.addEventListener('click', e => {
            addToFavorites(el, "favorites")
        });
        div.appendChild(btn);
        document.getElementById("books").appendChild(div);
    }
    else {
        btn.setAttribute("class", "fas fa-trash fav-trash");
        btn.addEventListener('click', e => {
            removeFromFavorites(el)
        });
        div.appendChild(btn);
        document.getElementById("fav").appendChild(div);
    }
}

function renderBooks(arrayName) {
    if (arrayName === "books") {
        books.map((el) => { generateCard(el, arrayName) });
    }
    else {
        favorites.map((el) => { generateCard(el, arrayName) });
    }
}

function addToFavorites(el) {
    favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(el);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function removeFromFavorites(removedEL) {
    favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter((el) => el.id !== removedEL.id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    document.getElementById("fav").innerHTML = "";
    renderBooks("favorites");
}
