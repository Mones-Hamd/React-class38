import { createContext, useState } from 'react';
export const FavouriteContext = createContext();
export const FavouriteProvider = (props) => {
  const [favourites, setFavourits] = useState([]);
  const addToFavourites = (product) => {
    setFavourits([...favourites, product]);
  };
  const removeFromFavourites = (id) => {
    setFavourits(favourites.filter((favourite) => favourite.id !== id));
  };

  const data = { favourites, addToFavourites, removeFromFavourites };
  return (
    <FavouriteContext.Provider value={data}>
      {props.children}
    </FavouriteContext.Provider>
  );
};
