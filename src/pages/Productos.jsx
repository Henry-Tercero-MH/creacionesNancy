import { useEffect, useState } from "react";
import { API_URL } from "../config";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/productos`)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al obtener productos", error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-2xl font-bold">Nuestros Productos</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">${producto.precio}</p>
                <button className="btn btn-primary">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
