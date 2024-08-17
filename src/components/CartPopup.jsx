/* eslint-disable react/prop-types */
import { useState } from 'react';

const CartPopup = ({ cartItems, closeCart, updateQuantity, removeItem, setCartItems }) => {
  const [discount, setDiscount] = useState(0); // Track discount value
  const [discountType, setDiscountType] = useState(null); // Type of discount

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Calculate the discount
  const calculateDiscount = () => {
    if (discountType === 'fixed') {
      return discount; // Fixed amount discount
    } else if (discountType === 'percentage') {
      return (discount / 100) * subtotal; // Percentage discount
    }
    return 0; // No discount
  };

  const discountAmount = calculateDiscount();
  const totalPrice = subtotal - discountAmount;

  const applyFixedDiscount = () => {
    setDiscountType('fixed');
    setDiscount(10); // $10 off discount
  };

  const applyPercentageDiscount = () => {
    setDiscountType('percentage');
    setDiscount(10); // 10% off discount
  };

  const applycheckout = () => {
    setCartItems([]);
    closeCart();
    alert('Thank you for your purchase!');
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
        <button onClick={closeCart} className="absolute top-2 right-2 text-xl">&times;</button>
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="border p-4 rounded-md flex justify-between">
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p>${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  <button onClick={() => removeItem(item.id)} className="text-red-500">Remove</button>
                </div>
              </div>
            ))}

            {/* Cart Summary Section */}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Discount:</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              {/* Discount Buttons */}
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={applyFixedDiscount}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Apply $10 Discount
                </button>
                <button
                  onClick={applyPercentageDiscount}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Apply 10% Discount
                </button>
              </div>

              {/* Checkout Button */}
              <button
                onClick={applycheckout}
                className="w-full bg-green-500 text-white mt-4 px-4 py-2 rounded hover:bg-green-700"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
