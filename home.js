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
renderBooks(books,"home");
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }  
//console.log(favorites);
//console.log(localStorage);