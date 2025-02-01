import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Asegúrate de tener esta librería instalada
import { useNavigate } from "react-router-dom";
import { formatPrice } from "./utils"; // Función para formatear los precios

function ViewCart() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Estado para almacenar el enlace
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isShareCartVisible, setIsShareCartVisible] = useState(false);
  const navigate = useNavigate(); // Usamos navigate para redirigir a la URL después de pegar el enlace

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(inputValue.split("?")[1]); // Solo tomamos la parte de la query
    const encodedData = params.get("data");

    if (encodedData && /^[A-Za-z0-9+/=]+$/.test(encodedData)) {
      try {
        const decodedData = JSON.parse(atob(encodedData));
        setCartItems(decodedData);
        setError(false); // Limpiamos errores anteriores si la decodificación es exitosa
      } catch (error) {
        console.error("Error al decodificar los datos:", error);
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  // Función para agregar al carrito (puedes personalizarla según tu lógica)
  const addToCart = (product) => {
    // Lógica para agregar al carrito
    console.log("Producto agregado al carrito:", product);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Productos en el carrito</h2>

      {/* Input para pegar el enlace */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          placeholder="Pega el enlace con los productos"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Cargar carrito
        </button>
      </form>

      {error && <p className="text-red-500">⚠ Error al cargar el carrito.</p>}

      {/* Mostrar productos en el carrito con el nuevo diseño */}
      {cartItems.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cartItems.map((product) => (
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
        </section>
      ) : (
        <p className="text-gray-600">No hay productos en el carrito.</p>
      )}

      <div className="mt-8 text-center">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => setIsShareCartVisible(!isShareCartVisible)}
        >
          {isShareCartVisible
            ? "Ocultar Compartir Carrito"
            : "Mostrar Compartir Carrito"}
        </button>
      </div>

      {isShareCartVisible && (
        <div className="mt-4 p-4 bg-gray-700 rounded-lg">
          <p className="text-white text-center">Compartir carrito...</p>
          {/* Aquí puedes agregar la lógica para compartir el carrito */}
        </div>
      )}
    </div>
  );
}

export default ViewCart;
