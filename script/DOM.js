const createImageElement = (src, alt, parentDiv) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    parentDiv.appendChild(img);
}

const createHeaderElement = (type, text, className, parentDiv) => {
    const header = document.createElement(type);
    header.innerText = text;
    header.setAttribute("class",className);
    parentDiv.appendChild(header);
}

const createHiddenElement = (id,parentDiv) => {
    const idHidden = document.createElement('input')
    idHidden.setAttribute("id", id);
    idHidden.setAttribute("class", "hidden");
    parentDiv.appendChild(idHidden);
}

const createButtonElement = (className, el, eventFunction, parentDiv) => {
    const btn = document.createElement("button");
    btn.setAttribute("class", className);
    btn.addEventListener('click', e => {
        e.target.setAttribute("class","fas fa-heart fav-trash-liked")
        //e.target.classlist.toggle("fas fa-heart fav-trash-liked");
        eventFunction(el)});
    parentDiv.appendChild(btn);
}