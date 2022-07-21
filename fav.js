let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
renderBooks("favorites");