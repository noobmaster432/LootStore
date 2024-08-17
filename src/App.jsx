import { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CartPopup from './components/CartPopup';
import Footer from './components/Footer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <Navbar cartItems={cartItems} toggleCart={toggleCart} />
      <Home addToCart={addToCart} />
      <Footer/>
      {isCartOpen && (
        <CartPopup 
          cartItems={cartItems} 
          closeCart={closeCart} 
          updateQuantity={updateQuantity} 
          removeItem={removeItem}
          setCartItems={setCartItems}
        />
      )}
    </div>
  );
};

export default App;
