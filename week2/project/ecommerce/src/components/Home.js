import CategoryList from './CategoryList';
import Products from './Products';
import { useEffect, useState } from 'react';

function Home() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  useEffect(() => {
    (async () => {
      const filterdProducts = await fetchData(
        `https://fakestoreapi.com/products/category/${category}`,
      );
      setProducts(filterdProducts);
    })();
  }, [category]);

  useEffect(() => {
    (async () => {
      const categories = await fetchData(
        `https://fakestoreapi.com/products/categories`,
      );
      setCategories(categories);

      const products = await fetchData(`https://fakestoreapi.com/products`);
      setProducts(products);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      {error ? (
        <div> SOMETHING WENT WRONG TRY AGAIN LATER ... </div>
      ) : (
        <h1>Products</h1>
      )}
      {isloading ? (
        ' LOADING .....'
      ) : (
        <>
          <CategoryList categories={categories} onClick={setCategory} />
          <Products products={products} />
        </>
      )}
    </div>
  );
}

export default Home;
