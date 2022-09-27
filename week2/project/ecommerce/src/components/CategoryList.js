import React from 'react';

import Category from './Category';

const CategoryList = ({ categories, onClick }) => {
  return (
    <div>
      <nav>
        <h2> Categories</h2>
        <ul>
          {categories.map((category) => (
            <Category category={category} onClick={onClick} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CategoryList;
