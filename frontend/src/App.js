import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Topbar from './components/topbar/Topbar';
import CartScreen from './pages/cart/CartScreen';
import Home from './pages/home/Home';
import LoginScreen from './pages/login/LoginScreen';
import ProductScreen from './pages/products/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:id' element={<ProductScreen />}/>
          <Route path='/cart' element={<CartScreen />}/>
          <Route path='/login' element={<LoginScreen />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
