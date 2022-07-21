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
  // THis function is not working
  function addNewBook(newBookForm){
    event.preventDefault();
    console.log("event: "+ event.target);
    console.log("form: " + newBookForm[1].innerHTML);
    console.log(newBookForm[0].value);

   const newTitle = newBookForm[0].value;
   const newAuthor = newBookForm[1].value;
   const newEdition = newBookForm[2].value;
   const newImage = newBookForm[3].value;
   const newId =5;
   const newBook = {id :newId ,title : newTitle,author : newAuthor, edition : newEdition, image : newImage};
   console.log(newBook);
   //renderBooks(books,"books");
   closeForm();
   books.push(newBook);
   
  }  
console.log(books);
//console.log(localStorage);