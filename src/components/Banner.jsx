import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="position-relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1560506840-ec148e82a604?auto=format&fit=crop&q=80)",
        }}
      >
        <div className="position-absolute inset-0 bg-gray-900 bg-opacity-70">
          <div className="container-fluid h-100 d-flex flex-column flex-md-row align-items-center justify-content-between px-3">
            {/* Sección de texto */}
            <div className="text-white max-w-2xl text-center text-md-start">
              <h2 className="text-4xl font-mono mb-2 animate-fade-in text-rose-400">
                Creaciones Nancy
              </h2>

              <p className="text-xl mb-4 text-gray-300">
                Vestidos para niñas con diseños únicos y exclusivos.
              </p>

              <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-md-start">
                <button className="btn btn-danger btn-lg px-4 shadow-lg">
                  Ver Colección
                </button>
                <button className="btn btn-outline-light btn-lg px-4">
                  Información
                </button>
              </div>
            </div>

            {/* Sección de imagen con badge "¡Nuevo!" */}
            <div className="d-flex flex-column flex-md-row gap-3 align-items-center mt-4 mt-md-0">
              <div className="position-relative">
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "1rem", padding: "8px 12px" }}
                >
                  ¡Nuevo!
                </span>
                <img
                  src="/vestido10.jpg"
                  alt="Producto destacado"
                  className="img-fluid rounded-circle w-auto w-md-100 shadow-lg"
                  style={{
                    maxWidth: "250px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="text-center text-md-start">
                <h2 className="text-2xl font-semibold text-white">
                  Precios Accesibles
                </h2>
                <p className="text-lg text-white">Sigue deslizando.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección adicional */}
      <div className="container py-4 text-center">
        <h2 className="text-3xl font-mono text-primary mb-4">Nuevo Ingreso</h2>
      </div>
    </div>
  );
};

export default Banner;
