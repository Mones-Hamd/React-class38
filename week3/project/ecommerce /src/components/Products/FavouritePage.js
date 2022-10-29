import React, { useContext } from 'react';
import { FavouriteContext } from '../../context/FavouriteContext';

import Product from './Product/Product';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
const FavouritePage = () => {
  const { favourites } = useContext(FavouriteContext);
  return (
    <div className="container">
      <Navbar title={'Favourites'} />
      {favourites.length > 0 ? (
        favourites.map((product) => (
          <div className="item-card" key={product.id}>
            <Link to={`/product/${product.id}`}>
              <Product
                image={product.image}
                title={product.title}
                id={product.id}
              />
            </Link>
          </div>
        ))
      ) : (
        <h2 className="h2-favourite">You haven't chosen any favourites yet!</h2>
      )}
    </div>
  );
};

export default FavouritePage;
