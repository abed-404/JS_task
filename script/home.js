let books = [
    {
        id: 1,
        title: "The complete English poems",
        author: "Samuel Johnson",
        edition: 33,
        image: "https://covers.openlibrary.org/b/id/9708321-L.jpg"
    },
    {
        id: 2,
        title: "The power of habit",
        author: "Charles Duhigg",
        edition: 13,
        image: "https://covers.openlibrary.org/b/id/12577855-L.jpg"
    },
    {
        id: 3,
        title: "Rich dad, poor dad",
        author: "Robert T. Kiyosaki",
        edition: 58,
        image: "https://covers.openlibrary.org/b/id/12779582-L.jpg"
    },
    {
        id: 4,
        title: "Off the Edge",
        author: "Kelly Weill",
        edition: 3,
        image: "https://covers.openlibrary.org/b/id/12649434-L.jpg"
    }
];
const renderHome = () => {
    document.getElementById("books").innerHTML = "";
    renderBooks(books, 'books', addToFavorites, "fas fa-heart fav-trash");
}


const addToFavorites = (el) => {
    favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFound = favorites.some(element => {
        if (element.id === el.id) {
          return true;
        }
        return false;
      });
    if (!isFound){
        favorites.push(el);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    else {
        alert("Book is already in favorites");
    }
}
renderHome();
document.getElementById('newBook').addEventListener('click', e => {
    e.preventDefault();
    addNewBook(e);
})

const addNewBook = ({target: {parentNode}}) => {
    const title = parentNode[0].value;
    const author = parentNode[1].value;
    const edition = parentNode[2].value;
    const image = parentNode[3].value;
    const id = books.length;
    const newBook = { id, title, author, edition, image };
    books.push(newBook);
    formDisplay(myForm, 'none');
    renderHome();
}
