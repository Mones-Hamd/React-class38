import { createContext, useState } from 'react';
export const FavouriteContext = createContext();
export const FavouriteProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const addToFavourites = (product) => {
    setFavourites([...favourites, product]);
  };
  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter((favourite) => favourite.id !== id));
  };

  const data = { favourites, addToFavourites, removeFromFavourites };
  return (
    <FavouriteContext.Provider value={data}>
      {props.children}
    </FavouriteContext.Provider>
  );
};
