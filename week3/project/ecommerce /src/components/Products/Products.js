import React from 'react';
import { Link } from 'react-router-dom';
import Favourite from './Product/Favourite';
import Product from './Product/Product';

const Products = ({ products }) => {
  return (
    <div className="container">
      {products.map((product) => (
        <div className="item-card" key={product.id}>
          <Favourite product={product} />
          <Link to={`/product/${product.id}`}>
            <Product
              image={product.image}
              title={product.title}
              id={product.id}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
