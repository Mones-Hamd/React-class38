import React from 'react';

const Category = ({ category, onClick }) => {
  return (
    <li>
      <button onClick={() => onClick(category)}>{category}</button>
    </li>
  );
};

export default Category;
