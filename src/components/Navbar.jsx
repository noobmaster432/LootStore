/* eslint-disable react/prop-types */
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartItems, toggleCart }) => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-sans font-semibold">LootStore</h1>
      </div>
      <div className="relative">
        <button onClick={toggleCart} className="flex items-center space-x-2">
          <FaShoppingCart size={24} />
          <span>{cartItems.length}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
