import React from 'react';
//import allProducts from '../fake-data/all-products';

const Items = ({ products }) => {
  return (
    <div className="container">
      {products.map(({ id, title, image }) => (
        <div className="item-card" key={id}>
          <div className="img-container">
            <img src={image} alt={title} />
          </div>
          <div className="detail-container">
            <p>{title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
