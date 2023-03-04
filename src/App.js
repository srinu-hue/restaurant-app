
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';
import Login from './components/Login';
import FoodItem from './components/FoodItem';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes element={<Login/>}>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/FoodItem' element={<FoodItem/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
