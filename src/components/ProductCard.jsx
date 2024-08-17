/* eslint-disable react/prop-types */
import { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 300);
  };

  return (
    <div className=" border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg h-[550px] flex flex-col">
      <div className="relative h-[60%]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain rounded-t-lg"
        />
        {isAdded && (
          <div className="absolute inset-0 bg-green-500 bg-opacity-70 flex items-center justify-center rounded-t-lg">
            <span className="text-white font-bold text-lg">Added!</span>
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-2 text-gray-800 truncate">
            {product.name}
          </h2>
          <p className="text-base font-normal mb-4 text-gray-700 line-clamp-2">
            {product.description}
          </p>
          <p className="text-xl font-bold mb-4 text-gray-900">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <button 
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-800 transition-all duration-300"
          onClick={handleAddToCart}
        >
          {isAdded ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
