import { useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  //   setIsCartOpen(true); // Open cart when adding an item
  // };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  return (
    <div>
      {/* Cart Sidebar */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 p-4`}
      >
        <button
          className="absolute top-2 right-2"
          onClick={() => setIsCartOpen(false)}
        >
          ✕
        </button>
        <h2 className="text-lg font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b p-2"
            >
              <img src={item.image} alt={item.name} className="w-12 h-12" />
              <div className="flex-1 ml-2">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-gray-500 text-xs">{item.price}</p>
              </div>
              <button
                className="text-red-500"
                onClick={() => removeFromCart(index)}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartPage;
