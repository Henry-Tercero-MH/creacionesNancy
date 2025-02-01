import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ViewCart() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const encodedData = params.get("data");

    if (encodedData && /^[A-Za-z0-9+/=]+$/.test(encodedData)) {
      try {
        const decodedData = JSON.parse(atob(encodedData));
        setCartItems(decodedData);
      } catch (error) {
        console.error("Error al decodificar los datos:", error);
        setError(true);
      }
    } else {
      setError(true);
    }
  }, [location.search]);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Productos en el carrito</h2>
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
