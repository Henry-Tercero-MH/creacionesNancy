import React from "react";

export default function Footer() {
  return (
    <footer
      className=" text-white"
      style={{ backgroundColor: "#000001f3", color: "#D1D5DB" }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="row g-4">
          <div className="col-12 col-md-3">
            <h3 className="text-lg font-bold mb-4">Creaciones Nancy</h3>
            <p className="text-gray-400">
              Estamos para servite comunicate y solicita tu producto
            </p>
          </div>

          <div className="col-12 col-md-3">
            <h4 className="text-lg font-bold mb-4">Comprar</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Niñas
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Ofertas
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h4 className="text-lg font-bold mb-4">Ayuda</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Envíos
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            {/* <h4 className="text-lg font-bold mb-4">Legal</h4> */}
            <ul className="list-unstyled"></ul>
          </div>
        </div>

        <div className="border-top border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Creaciones Nancy. Todos los derechos reservados.</p>
          <span>by hemisterhe 4G</span>
        </div>
      </div>
    </footer>
  );
}
