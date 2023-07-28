import Header from './components/Layout/Header';
import './App.css';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [cartVisibility,setCartVisibility] = useState(false);
  const toggleCart = () => {
    setCartVisibility(!cartVisibility);
  }
  return (
    <div>
      {cartVisibility && <Cart toggleCart={toggleCart}/>}
      <Header toggleCart={toggleCart}/>
      <main className='main'>
        <Meals/>
      </main>
    </div>
  );
}

export default App;
