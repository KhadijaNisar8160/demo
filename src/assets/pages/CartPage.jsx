import { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import Header from "./Header";
import Footer from "./Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pink Voyage Mi-Pod", price: 29.99, quantity: 1 },
    { id: 2, name: "Helios Mi-Pod Pro", price: 29.99, quantity: 1 },
  ]);

  const navigate = useNavigate(); // Hook for page redirection

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save to local storage
    alert("Order placed successfully!"); // Show success message
    navigate("/"); // Redirect to confirmation page
  };

  return (
    <div className="max-w-md mx-auto bg-white border rounded-lg">
      <div className="flex justify-between items-center p-3">
        <h2 className="text-xl font-semibold">C A R T</h2>
        <div className="flex items-center gap-4">
          <button className="text-black py-2">CONTINUE SHOPPING</button>
          {/* <h1 className="cursor-pointer font-bold">X</h1> */}
        </div>
      </div>
      <p className="mb-4 border-b border-t px-6 py-2">
        You are eligible for free shipping!
      </p>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-4 border-b pb-4 p-3"
        >
          <img
            src="https://mipod.com/cdn/shop/files/Helios_1_Mi-Pod-PRO__600x600_5351146b-60e7-4d69-8529-0f1f0ced4df8_x190.png?v=1704405891"
            alt={item.name}
            className="w-16 h-16"
          />
          <div className="flex flex-col">
            <span className="text-sm">{item.name}</span>
            <p className="text-gray-700">${item.price.toFixed(2)}</p>
            <div className="flex mt-2">
              <div className="flex items-center border">
                <button
                  className="px-2"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  className="px-2"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <button
                className="text-sm ml-4"
                onClick={() => removeItem(item.id)}
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center pb-5">
        <button
          className="bg-black text-white w-full mx-10 p-2 py-2 mt-4 rounded"
          onClick={handleCheckout}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};
const CartPage = () => {
  return (
    <div>
      <Header />
      <div className="  flex items-center border-t pt-10 ">
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
