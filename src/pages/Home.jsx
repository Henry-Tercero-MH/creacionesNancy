import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Banner from "../components/Banner";
import { FaWhatsapp } from "react-icons/fa";

import {
  Filter,
  Terminal,
  Coffee,
  Cpu,
  Github,
  ShoppingCart,
} from "lucide-react"; // Asegúrate de importar los íconos necesarios

const Home = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const products = [
    {
      id: 1,
      name: "Vestido Niña ",
      description: "Tallas 0-4",
      price: 130.0,
      imageUrl: "src/assets/vestidoNiña.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 2,
      name: "Vestido Para Primera Comunión/Bautisos",
      description:
        "Las tallas grandes  en blanco se usan para  comunión  y las tallas  pequeñas para  Bautizo  y presentación Tallas 0.1.2.3. 4.6.8.10.12",
      price: 120.0,
      imageUrl: "src/assets/comunion.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 3,
      name: "Vestido Blanco",
      description: "Incluye Pelio Tallas 0.1.2.3.4.",
      price: 130.0,
      imageUrl: "src/assets/vestidoPelio.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 4,
      name: "Vestido Blanco",
      description: "Incluye Pelio Tallas 0.1.2.3",
      price: 100.0,
      imageUrl: "src/assets/vestido4.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 5,
      name: "Vestido Blanco",
      description: "Incluye Pelio Tallas 0.1.2.3",
      price: 100.0,
      imageUrl: "src/assets/vestido5.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 6,
      name: "Vestido Blanco",
      description: "Tallas 8.10.12. 14.16",
      price: 300.0,
      imageUrl: "src/assets/vestido6.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 7,
      name: "Vestido Blanco sin mangas",
      description: "Tallas 0.1.2.3. 4.6.8.10.12",
      price: 130.0,
      imageUrl: "src/assets/vestido7.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
    {
      id: 8,
      name: "Vestido Abejitas",
      description: "Tallas 0.1.2.3. 4.6.8.  Abejas",
      price: 140.0,
      imageUrl: "src/assets/vestido8.jpg",
      categories: ["Alegres", ""],
    },
    {
      id: 9,
      name: "Vestido Abejitas",
      description: "Colores: Rosado, Verde y Corinto Tallas ",
      price: 130.0,
      imageUrl: "src/assets/vestido9.png",
      categories: ["Casual", ""],
    },
    {
      id: 10,
      name: "Vestido Verde maripositas",
      description: "Tallas 0.1.2.3. 4.6.8.10.12 ",
      price: 0.0,
      imageUrl: "src/assets/vestido10.jpg",
      categories: ["Casual", ""],
    },
  ];

  const formatPrice = (price) => `Q${price.toFixed(2)}`;

  return (
    <div style={{ backgroundColor: "#042326", color: "#D1D5DB" }}>
      <Banner />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <select className="bg-dark-800 text-gray-300 rounded-lg border border-blue-900/30 px-4 py-2">
              <option>Todas las categorías</option>
              <option>Primera Comunion</option>
              <option>Alegres</option>
              <option>Casuales</option>
              <option></option>
            </select>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 ">Ordenar por:</span>
            <select className="bg-dark-800 text-white-300 rounded-lg border border-blue-900/30 px-4 py-2">
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
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white-700 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 border border-blue-900/30"
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-64">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {hoveredItem === product.id && (
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center backdrop-blur-sm">
                    <div className="space-y-2">
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full font-mono">
                        Ver Detalles
                      </button>
                      <button className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors w-full font-mono">
                        Vista Rápida
                      </button>
                    </div>
                  </div>
                )}
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
                  <button className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-mono flex items-center space-x-2">
                    {" "}
                    <a
                      href="https://wa.me/43734112"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-mono flex items-center space-x-2"
                    >
                      <span>Comprar</span>
                      <FaWhatsapp className="w-4 h-4 ml-2" />
                    </a>
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

export default Home;
