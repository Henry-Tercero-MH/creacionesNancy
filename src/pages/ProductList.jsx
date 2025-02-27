import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Filter } from "lucide-react";

const ProductList = ({ cartItems, setCartItems }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    "Todas las categorías"
  );
  const [sortOrder, setSortOrder] = useState("Más recientes");

  const products = [
    {
      id: 1,
      name: "Vestido Niña ",
      description: "Tallas 0-4",
      price: 130.0,
      imageUrl: "/vestidoNiña.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 2,
      name: "Vestido Para Primera Comunión/Bautisos",
      description:
        "Las tallas grandes  en blanco se usan para  comunión  y las tallas  pequeñas para  Bautizo  y presentación Tallas 0.1.2.3. 4.6.8.10.12",
      price: 120.0,
      imageUrl: "/comunion.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 3,
      name: "Vestido Blanco",
      description: "Incluye Pelio Tallas 0.1.2.3.4.",
      price: 130.0,
      imageUrl: "/vestidoPelio.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 4,
      name: "Vestido Blanco",
      description: "No incluye Pelio Tallas 0.1.2.3",
      price: 100.0,
      imageUrl: "/vestido4.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 5,
      name: "Vestido Blanco",
      description: "No Incluye Pelio Tallas 0.1.2.3",
      price: 100.0,
      imageUrl: "/vestido5.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 6,
      name: "Vestido Blanco",
      description: "No incluye Pelio, Tallas 8.10.12. 14.16",
      price: 300.0,
      imageUrl: "/vestido6.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 7,
      name: "Vestido Blanco sin mangas",
      description: "Tallas 0.1.2.3. 4.6.8.10.12",
      price: 130.0,
      imageUrl: "/vestido7.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 8,
      name: "Vestido Abejitas",
      description: "Tallas 0.1.2.3. 4.6.8.  Abejas",
      price: 140.0,
      imageUrl: "/vestido8.jpg",
      categories: ["Alegres", ""],
    },
    {
      id: 9,
      name: "Vestido Abejitas",
      description: "Colores: Rosado, Verde y Corinto Tallas ",
      price: 130.0,
      imageUrl: "/vestido9.png",
      categories: ["Casual", ""],
    },
    {
      id: 10,
      name: "Vestido Verde maripositas",
      description: "Tallas 0.1.2.3. 4.6.8.10.12 ",
      price: 0.0,
      imageUrl: "/vestido10.jpg",
      categories: ["Casual", ""],
    },
    {
      id: 11,
      name: "Vestido Rojo del amor",
      description: "Tallas 0.1.2.3. 4.6.8.10 ",
      price: 90.0,
      imageUrl: "/vestido11.jpg",
      categories: ["Casual", ""],
    },
    {
      id: 12,
      name: "Vestido Rosado",
      description: "Tallas 0.1.2.3. 4.6.8.10 ",
      price: 130.0,
      imageUrl: "/vestido12.jpg",
      categories: ["Casual", ""],
    },
    {
      id: 13,
      name: "Vestido Rosado",
      description: "Tallas 0.1.2.3. 4.6.8.10.12 ",
      price: 150.0,
      imageUrl: "/vestido13.jpg",
      categories: ["Casual", ""],
    },
    {
      id: 14,
      name: "Vestido Lila",
      description: "Tallas 12 ",
      price: 140.0,
      imageUrl: "/vestido14.jpg",
      categories: ["Casual", ""],
    },
    {
      id: 15,
      name: "Vestido Rosado con diseño floresita",
      description: "Tallas 0.1.2.3. 4.6.8.10.12, incluye Pelio",
      price: 130.0,
      imageUrl: "/vestido15.jpg",
      categories: ["Casual", ""],
    },
    {
      id: 16,
      name: "Vestido Rosado con diseño floresita",
      description: "Tallas 0.1.2.3. 4.6.8.10.12",
      price: 225.0,
      imageUrl: "/vestido16.jpg",
      categories: ["Casual", ""],
    },
    {
      id: 17,
      name: "Vestido Rosado con moñito",
      description: "Tallas 0.1.2.3.4.6.8",
      price: 100.0,
      imageUrl: "/vestido17.jpg",
      categories: ["Casual", ""],
    },
    {
      id: 18,
      name: "Vestido Blanco",
      description: "Tallas 0.1.2.3",
      price: 70.0,
      imageUrl: "/vestido18.jpg",
      categories: ["Casual", ""],
    },
    {
      id: 19,
      name: "Vestido Diseño Princesas",
      description: "con pelio tallas 0.1.2.3. 4.6.8.10.12",
      price: 130.0,
      imageUrl: "/vestido19.jpg",
      categories: ["Casual", ""],
    },
    {
      id: 20,
      name: "Par de Aretes con diseño de Corona",
      description: "plata",
      price: 150.0,
      imageUrl: "/areteCorona.jpg",
      categories: ["Joyería", ""],
    },
  ];

  const formatPrice = (price) => `Q${price.toFixed(2)}`;

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory === "Todas las categorías") return true;
      return product.categories.includes(selectedCategory);
    })
    .sort((a, b) => {
      if (sortOrder === "Precio: Menor a Mayor") return a.price - b.price;
      if (sortOrder === "Precio: Mayor a Menor") return b.price - a.price;
      return 0;
    });

  const categorizedProducts = filteredProducts.sort((a, b) => {
    const isAColor =
      !a.categories.includes("Primera Comunion") &&
      !a.categories.includes("Bautizos");
    const isBColor =
      !b.categories.includes("Primera Comunion") &&
      !b.categories.includes("Bautizos");
    return isAColor === isBColor ? 0 : isAColor ? -1 : 1;
  });

  return (
    <div style={{ backgroundColor: "#042326", color: "#D1D5DB" }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-400 hidden md:block" />
            <select
              className="bg-dark-800 text-gray-300 rounded-lg border border-blue-900/30 px-4 py-2"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>Todas las categorías</option>
              <option>Primera Comunion</option>
              <option>Alegres</option>
              <option>Casuales</option>
              <option>Joyería</option>
            </select>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 hidden md:block">Ordenar por:</span>
            <select
              className="bg-dark-800 text-white-300 rounded-lg border border-blue-900/30 px-4 py-2"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option>Más recientes</option>
              <option>Precio: Menor a Mayor</option>
              <option>Precio: Mayor a Menor</option>
              <option>Más vendidos</option>
            </select>
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categorizedProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 ${
                hoveredItem === product.id
                  ? "scale-105 border border-blue-500"
                  : ""
              }`}
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-96">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-mono text-white-400 mb-2">
                  {product.name}
                </h4>
                <p className="text-rose-400 mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.categories.map((category) => (
                    <span
                      key={category}
                      className="text-xs bg-blue-900/30 text-rose-300 px-2 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-mono font-semibold text-white-400">
                    {formatPrice(product.price)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-mono flex items-center space-x-2"
                  >
                    <span>Agregar</span>
                    <FaWhatsapp className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductList;
