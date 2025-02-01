import React, { useState } from "react";
import { Heart, ShoppingCart, Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import ViewCart from "./Viewcart";
import ShareCart from "./ShareCart";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú móvil

  return (
    <>
      <nav
        className="   shadow-sm fixed w-full z-50"
        style={{ backgroundColor: "#042326", color: "#D1D5DB" }}
      >
        <div className="container-fluid max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="d-flex justify-content-between align-items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 d-flex align-items-center">
              <h1 className="text-2xl font-bold text-pink-600">
                Creaciones Nancy
              </h1>
            </div>

            {/* Navegación de escritorio */}
            <div className="d-none d-md-flex align-items-center space-x-8">
              <a href="#" className="text-white hover:text-pink-600">
                Niñas
              </a>

              <a href="#" className="text-white hover:text-pink-600">
                Ofertas
              </a>
            </div>

            {/* Íconos de búsqueda, favoritos y carrito */}
            <div className="d-none d-md-flex align-items-center space-x-4">
              <button className="p-2 text-white hover:text-pink-600">
                <Search size={20} />
              </button>
              <button className="p-2 text-white hover:text-pink-600">
                <Heart size={20} />
              </button>
              <Link to="/view-cart">
                <button className="p-2 text-white hover:text-pink-600">
                  <ShareCart size={20} />
                </button>
              </Link>
            </div>

            {/* Botón para abrir el menú en dispositivos móviles */}
            <button
              className="d-md-none p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna la visibilidad del menú móvil
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="d-md-none bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-pink-600"
              >
                Niñas
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-pink-600"
              >
                Niños
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-pink-600"
              >
                Bebés
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-white hover:text-pink-600"
              >
                Ofertas
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
