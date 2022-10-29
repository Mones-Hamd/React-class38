import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetailes/ProductDetails';
import { FavouriteProvider } from './context/FavouriteContext';
import FavouritePage from './components/Products/FavouritePage';

function App() {
  return (
    <div className="App">
      <FavouriteProvider>
        <>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/product/favourite" element={<FavouritePage />} />
            </Routes>
          </Router>
        </>
      </FavouriteProvider>
    </div>
  );
}

export default App;
