import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from '../src/Pages/Shop';
import ShopCategory from '../src/Pages/ShopCategory';
import Product from '../src/Pages/Product';
import Cart from '../src/Pages/Cart';
import LoginSignup from '../src/Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element ={<ShopCategory banner = {men_banner} category = "men" />} />
      <Route path='/womens' element ={<ShopCategory banner = {women_banner} category = "women" />} />
      <Route path='/kids' element ={<ShopCategory banner = {kid_banner} category = "kid" />} />
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
