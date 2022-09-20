import React from 'react';
// import { useState } from 'react';
// import categoryTitle from '../fake-data/all-categories';
// import products from '../fake-data/all-products';
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
