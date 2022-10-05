import CategoryList from './Categories/CategoryList';
import Products from './Products/Products';
import { useState } from 'react';
import Navbar from './Navbar';
import { useFetch } from '../Hooks/useFetch';

function Home() {
  const [category, setCategory] = useState(null);
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : 'https://fakestoreapi.com/products';
  const renderOption = category ? category : [];
  const {
    data: categories,
    error: categoriesErr,
    isloading: categoriesLoading,
  } = useFetch(`https://fakestoreapi.com/products/categories`);
  const {
    data: products,
    error: productsErr,
    isloading: productsLoading,
  } = useFetch(url, renderOption);

  return (
    <div>
      {categoriesErr || productsErr ? (
        <div> SOMETHING WENT WRONG TRY AGAIN LATER ... </div>
      ) : (
        <h1>My Shope</h1>
      )}
      {productsLoading || categoriesLoading ? (
        ' LOADING .....'
      ) : (
        <>
          <Navbar title={'products'} />
          <CategoryList categories={categories} onClick={setCategory} />
          <Products products={products} />
        </>
      )}
    </div>
  );
}

export default Home;
