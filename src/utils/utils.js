export function addToFavouties(data) {
  const favourites = localStorage.getItem("favourites");
  if (favourites) {
    const favouritesParsed = JSON.parse(favourites);
    if (favouritesParsed.find((item) => item.id === data.id)) {
      removeFromFavourites(data.id);
    } else {
      const favourites = [...favouritesParsed, { ...data }];
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
  } else {
    const favourites = [{ ...data }];
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }
}

function removeFromFavourites(id) {
  const favourites = JSON.parse(localStorage.getItem("favourites"));
  const newFavourites = favourites.filter((item) => item.id !== id);
  localStorage.setItem("favourites", JSON.stringify(newFavourites));
}

export function isFavouriteExist(id) {
  const favourites = localStorage.getItem("favourites");
  const favouritesParsed = JSON.parse(favourites);
  if (favourites && favouritesParsed.find((item) => item.id === id)) {
    return true;
  } else {
    return false;
  }
}
