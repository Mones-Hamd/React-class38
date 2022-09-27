import './App.css';
import CategoryList from './components/CategoryList';
import Products from './components/Products';
import { useEffect, useState } from 'react';
import categoriesTitle from './fake-data/all-categories';
import productsItems from './fake-data/all-products';

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const allProducts = productsItems;
    const result = allProducts.filter(
      (product) => product.category === category,
    );
    setProducts(result);
  }, [category]);

  useEffect(() => {
    setProducts(productsItems);
  }, []);

  return (
    <div className="App">
      <h1>Products</h1>
      <CategoryList categories={categoriesTitle} onClick={setCategory} />
      <Products products={products} />
    </div>
  );
}

export default App;
