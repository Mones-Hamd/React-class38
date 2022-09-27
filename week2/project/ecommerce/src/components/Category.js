import React from 'react';

const Category = ({ category, onClick }) => {
  return <li onClick={() => onClick(category)}>{category}</li>;
};

export default Category;
