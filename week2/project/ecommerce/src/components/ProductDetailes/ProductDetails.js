import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProductDetails(data);
    })();
  }, [id]);
  const { title, description, image } = productDetails;
  return (
    <div className="details">
      <h1>{title}</h1>
      <p className="description">{description}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default ProductDetails;
