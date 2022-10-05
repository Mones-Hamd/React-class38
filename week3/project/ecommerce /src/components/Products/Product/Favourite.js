import React, { useContext } from 'react';
import heartRegularSvg from '../../../assets/heart-regular.svg';
import heartSolidSvg from '../../../assets/heart-solid.svg';
import { FavouriteContext } from '../../../context/FavouriteContext';
const Favourite = ({ product }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);
  const isFavourite = (id) => {
    const isFavouriteProuduct = favourites.some((product) => product.id === id);
    return isFavouriteProuduct;
  };

  return (
    <div className="favourite">
      {isFavourite(product.id) ? (
        <img
          src={heartSolidSvg}
          alt="favourite-heart"
          onClick={() => removeFromFavourites(product.id)}
        />
      ) : (
        <img
          src={heartRegularSvg}
          alt="favourite-heart"
          onClick={() => addToFavourites(product)}
        />
      )}
    </div>
  );
};

export default Favourite;
