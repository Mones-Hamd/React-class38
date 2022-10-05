import React from 'react';

const Product = ({ image, title, id }) => {
  return (
    <div>
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <div className="detail-container">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Product;
