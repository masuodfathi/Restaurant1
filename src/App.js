import Header from './components/Layout/Header';
import './App.css';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import { CartProvider } from './store/CartContext';
import ChatComponent from './components/Chat/ChatComponent';
import Chat2 from './components/Chat/Chat2'

function App() {
  const [cartVisibility,setCartVisibility] = useState(false);
  const toggleCart = () => {
    setCartVisibility(!cartVisibility);
  }
  return (
    <>
    <CartProvider>
      {cartVisibility && <Cart toggleCart={toggleCart}/>}
      <Header toggleCart={toggleCart}/>
      <main className='main'>
        <Meals/>
      </main>
    </CartProvider>
    </>
  );
}

export default App;
