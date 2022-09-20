import './App.css';
import CategoryList from './components/CategoryList';
import Items from './components/Items';
import { useEffect, useState } from 'react';
import categoriesTitle from './fake-data/all-categories';
import productsItems from './fake-data/all-products';

function App() {
  const [products, setItem] = useState([]);

  const onClick = (category) => {
    filterProduct(category);
  };
  const filterProduct = (category) => {
    const allProducts = productsItems;
    const result = allProducts.filter(
      (product) => product.category === category,
    );
    setItem(result);
  };
  useEffect(() => {
    setItem(productsItems);
  }, []);

  return (
    <div className="App">
      <h1>Products</h1>
      <CategoryList categories={categoriesTitle} onClick={onClick} />
      <Items products={products} />
    </div>
  );
}

export default App;
