import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProductDetails(data);
      } catch (err) {
        setProductDetails(null);
      }
    })();
  }, [id]);
  const { title, description, image } = productDetails;
  return (
    <div className="details">
      {productDetails ? (
        <>
          <h1>{title}</h1>
          <p className="description">{description}</p>
          <img src={image} alt={title} />
        </>
      ) : (
        <h1> SOMETHING WENT WRONG TRY AGAIN LATER</h1>
      )}
    </div>
  );
};

export default ProductDetails;
