import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Banner from "../components/Banner";
import { FaWhatsapp } from "react-icons/fa";

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
        "Las tallas grandes en blanco se usan para comunión y las tallas pequeñas para Bautizo y presentación Tallas 0.1.2.3.4.6.8.10.12",
      price: 120.0,
      imageUrl: "src/assets/comunion.jpg",
      categories: ["Primera Comunion", "Bautizos"],
    },
  ];

  const formatPrice = (price) => `Q${price.toFixed(2)}`;

  return (
    <div style={{ backgroundColor: "#042326", color: "#D1D5DB" }}>
      <Banner />
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <label className="me-2">Filtrar por categoría:</label>
            <select className="form-select">
              <option>Todas las categorías</option>
              <option>Primera Comunion</option>
              <option>Alegres</option>
              <option>Casuales</option>
            </select>
          </div>
          <div className="d-flex align-items-center">
            <label className="me-2">Ordenar por:</label>
            <select className="form-select">
              <option>Más recientes</option>
              <option>Precio: Menor a Mayor</option>
              <option>Precio: Mayor a Menor</option>
              <option>Más vendidos</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4">
              <div
                className="card border-primary shadow-sm h-100"
                onMouseEnter={() => setHoveredItem(product.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="position-relative">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="card-img-top"
                  />
                  {hoveredItem === product.id && (
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center">
                      <div>
                        <button className="btn btn-primary w-100 mb-2">
                          Ver Detalles
                        </button>
                        <button className="btn btn-secondary w-100">
                          Vista Rápida
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <div className="d-flex justify-content-center gap-2 mb-3">
                    {product.categories.map((category) => (
                      <span key={category} className="badge bg-primary">
                        {category}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-success">{formatPrice(product.price)}</h4>
                  <a
                    href="https://wa.me/43734112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success d-flex align-items-center justify-content-center gap-2"
                  >
                    <span>Comprar</span>
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
