
let favorites = JSON.parse(localStorage.getItem("favorites"|| "[]"));
console.log(favorites);

renderBooks(favorites,"favorites");