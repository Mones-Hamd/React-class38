import React from 'react';

import Category from './Category/Category';

const CategoryList = ({ categories, onClick }) => {
  return (
    <nav>
      <h2> Categories</h2>
      <ul>
        {categories.map((category) => (
          <Category category={category} onClick={onClick} key={category} />
        ))}
      </ul>
    </nav>
  );
};

export default CategoryList;
