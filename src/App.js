import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import Cart from './components/cart/Cart';
import Login from './components/login/Login';
import Footer from './components/Footer';

function App() {
  const [cartItems , setCartItems] = useState([]);

  const handleAddItem = (product) => {
    const productExit = cartItems.find((item)=> item.id === product.id);
    if(productExit){
      setCartItems(cartItems.map((item)=>(item.id === product.id ? {...productExit , quentity: productExit.quentity + 1}:item)))
    } else {
      setCartItems([...cartItems , {...product , quentity: 1}])
    }
  }

  const handleRemoveItem = (product) =>{
    const productExit = cartItems.find((item)=> item.id === product.id);
    if(productExit.quentity === 0){
      setCartItems(cartItems.filter((item)=> item.product !== item.id))
    } else {
      setCartItems(
        cartItems.map((item)=>item.id === product.id ? {...productExit , quentity: productExit.quentity -1} : item)
      )
    }
  }

  const handleClear = () => {
    setCartItems([])
  }
  return (
    <div className="body">
    <Router>
      <Navbar />
      <Switch>
        <Route path='/'exact component={Home} />
        <Route path='/menu' exact ><Menu handleAddItem={handleAddItem} /></Route>
        <Route path='/cart' exact ><Cart cartItems={cartItems} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} handleClear={handleClear} /></Route>
        <Route path='/login' exact component={Login} />
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
