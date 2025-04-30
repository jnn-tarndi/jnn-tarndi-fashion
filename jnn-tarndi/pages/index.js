import React, { useState } from "react";
import Head from "next/head";
import { ShoppingCart, Menu, X } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Men's T-Shirt",
    price: 19.99,
    image: "https://via.placeholder.com/300x400?text=Men's+T-Shirt",
  },
  {
    id: 2,
    name: "Women's Dress",
    price: 49.99,
    image: "https://via.placeholder.com/300x400?text=Women's+Dress",
  },
  {
    id: 3,
    name: "Unisex Hoodie",
    price: 39.99,
    image: "https://via.placeholder.com/300x400?text=Unisex+Hoodie",
  },
];

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Jnn Tarndi - Clothing Market</title>
        <meta name="description" content="Trendy clothing store for men and women" />
      </Head>

      {/* Navigation Bar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-blue-600">Jnn Tarndi</div>
          <div className="flex gap-6 items-center text-gray-700">
            <nav className="hidden md:flex gap-4">
              <a href="#" className="hover:text-blue-600">Home</a>
              <a href="#" className="hover:text-blue-600">Men</a>
              <a href="#" className="hover:text-blue-600">Women</a>
              <a href="#" className="hover:text-blue-600">New Arrivals</a>
            </nav>
            <div className="relative">
              <ShoppingCart className="w-6 h-6 cursor-pointer" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
            <Menu className="w-6 h-6 md:hidden cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Product Grid */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Trending Clothing</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="rounded-2xl shadow hover:shadow-lg transition bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-t-2xl w-full h-64 object-cover"
              />
              <div className="p-4 space-y-3">
                <h2 className="text-lg font-medium text-gray-800">{product.name}</h2>
                <p className="text-blue-600 font-semibold">${product.price.toFixed(2)}</p>
                <button
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart size={16} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        {cart.length > 0 && (
          <div className="mt-10 p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                  <button
                    className="text-sm text-red-600 hover:underline"
                    onClick={() => removeFromCart(index)}
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-lg font-medium">
              Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
