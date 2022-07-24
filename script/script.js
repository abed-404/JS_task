const generateCard = (el, divName, cb, btnClass) => {
    const { id, image, title, author } = el
    const div = document.createElement("div");
    createImageElement(image,"Image Not Found !",div);
    createHeaderElement("h5", title, "title", div);
    createHeaderElement("h6", author, "author", div);
    createButtonElement(btnClass, el, cb, div)
    div.setAttribute("class", "book");
    document.getElementById(divName).appendChild(div);
}

const renderBooks = (array, divName, cb, btnText) => {
    array.map((el) => { generateCard(el ,divName, cb, btnText) });
}








