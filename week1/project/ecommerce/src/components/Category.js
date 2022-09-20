import React from 'react';

const Category = ({ category, onClick }) => {
  return <li onClick={() => onClick(category.slice(6))}>{category}</li>;
};

export default Category;
