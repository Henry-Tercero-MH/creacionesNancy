import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1560506840-ec148e82a604?auto=format&fit=crop&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70">
          <div className="container h-full d-flex align-items-center justify-content-between">
            <div className="text-white max-w-2xl">
              <h2 className="text-4xl font-mono mb-2 animate-fade-in text-rose-400">
                Creaciones Nancy
              </h2>

              <p className="text-xl mb-8 text-gray-300">
                Vestidos para niñas con diseños unicos y exclusivos.
              </p>
              <div className="d-flex gap-3">
                <button className="bg-pink-600 hover:bg-rose-700 text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-900/50 font-mono">
                  Ver Colección
                </button>
                <button className="border-2 border-rose-400 text-blue-300 px-8 py-3 rounded-lg hover:bg-pink-400/10 transition-all transform hover:scale-105 font-mono">
                  Informacion
                </button>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <div className="position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  ¡Nuevo!
                </span>
                <img
                  src="src/assets/vestido10.jpg"
                  alt="Producto destacado"
                  className="h-28 w-28 object-cover rounded-circle"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Precios Accesibles
                </h2>
                <p className="text-lg text-white">Sigue deslizando.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <h2 className="text-3xl font-mono text-blue-400 mb-4">Nuevo Ingreso</h2>
      </div>
    </div>
  );
};

export default Banner;
