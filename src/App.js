import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from '../src/Pages/Shop';
import ShopCategory from '../src/Pages/ShopCategory';
import Product from '../src/Pages/Product';
import Cart from '../src/Pages/Cart';
import LoginSignup from '../src/Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element ={<ShopCategory category = "men" />} />
      <Route path='/womens' element ={<ShopCategory category = "women" />} />
      <Route path='/kids' element ={<ShopCategory category = "kid" />} />
      <Route path='/product' element = {<Product/>} />
      <Route path=':ProductId' element = {<Product/>} />
      <Route path='/cart' element = {<Cart/>} />
      <Route path='/loginsignup' element = {<LoginSignup/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
