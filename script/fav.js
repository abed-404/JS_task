let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const removeFromFavorites = (removedEL) => {
    favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter((el) => el.id !== removedEL.id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    renderFavorites();
}

const renderFavorites = () => {
    document.getElementById("fav").innerHTML = "";
    renderBooks(favorites, 'fav', removeFromFavorites, "fas fa-trash fav-trash");
}

renderFavorites();