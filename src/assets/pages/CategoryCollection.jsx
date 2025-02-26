import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../../Firebase";
import { collection, getDocs } from "firebase/firestore";

export default function ProductFilter() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoriesCollection = collection(db, "Category");
        const snapshot = await getDocs(categoriesCollection);

        if (snapshot.empty) {
          console.log("No products found in Firestore.");
          return;
        }

        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id, // Store document ID if needed
          ...doc.data(), // Spread all product data
        }));

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="p-5">
        <div className="mt-5 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="justify-center p-4">
                  <img
                    src={product.image || "default-placeholder.jpg"}
                    alt={product.name || "Unnamed Product"}
                    className="w-full h-48 rounded"
                  />
                  <h2 className="text-center text-sm mt-4">{product.name}</h2>
                  <p className="text-gray-500 text-center font-medium">
                    {product.price}
                  </p>
                  {/* <NavLink to="/CartPage"> */}
                  <button className="mt-4 w-32 bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200">
                    ADD TO CART
                  </button>
                  {/* </NavLink> */}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
