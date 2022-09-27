import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products, fetchData }) => {
  return (
    <div className="container">
      {products.map(({ id, title, image }) => (
        <div className="item-card" key={id}>
          <Link to={`/product/${id}`}>
            <div className="img-container">
              <img src={image} alt={title} />
            </div>
            <div className="detail-container">
              <p>{title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
