import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <div className="navbar">
      <h3> {title}</h3>
      <ul>
        <Link to="/">
          <li>Products</li>
        </Link>
        <Link to="/product/favourite">
          <li>Favourite</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
