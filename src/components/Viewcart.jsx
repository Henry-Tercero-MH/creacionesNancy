import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewCart() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Estado para almacenar el enlace
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

  return (
    <div className="p-4 max-w-lg mx-auto">
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
      {cartItems.length > 0 ? (
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 p-2 border-b"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-12 h-12 rounded"
              />
              <span>
                {item.name} - <strong>Q{item.price.toFixed(2)}</strong>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No hay productos en el carrito.</p>
      )}
    </div>
  );
}

export default ViewCart;
