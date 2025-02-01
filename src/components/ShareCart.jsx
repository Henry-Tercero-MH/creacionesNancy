import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

function ShareCart({ cartItems, setCartItems, allProducts }) {
  const [sharedLink, setSharedLink] = useState("");

  // Generar enlace con los IDs de los productos en formato JSON codificado en base64
  const generarEnlace = () => {
    const productIds = cartItems.map((item) => item.id); // Solo tomamos los IDs de los productos
    const jsonString = JSON.stringify(productIds);
    const base64String = btoa(jsonString); // Codificamos en base64
    const link = `${window.location.origin}/share-cart?data=${base64String}`;
    setSharedLink(link);
  };

  // Decodificar el enlace y obtener los productos completos
  const decodificarEnlace = () => {
    const params = new URLSearchParams(window.location.search);
    const encodedData = params.get("data");
    if (encodedData) {
      const decodedIds = JSON.parse(atob(encodedData)); // Decodificamos el base64
      // Buscamos los productos completos en allProducts usando los IDs decodificados
      const productosFiltrados = allProducts.filter((product) =>
        decodedIds.includes(product.id)
      );
      setCartItems(productosFiltrados); // Actualizamos el estado con los productos completos
    }
  };

  // Decodificar el enlace al cargar el componente si hay datos en la URL
  useEffect(() => {
    decodificarEnlace();
  }, []);

  // Enviar enlace a través de WhatsApp
  const enviarPorWhatsApp = () => {
    const numeroWhatsApp = "50243734112"; // Reemplaza con el número de WhatsApp deseado
    const mensaje = `Hola, revisa mi carrito de compras: ${sharedLink}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <h2>Compartir Carrito</h2>

      <button onClick={generarEnlace}>Generar Enlace</button>

      {sharedLink && (
        <div>
          <p>Comparte este enlace:</p>
          <input type="text" value={sharedLink} readOnly />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 mt-2"
            onClick={enviarPorWhatsApp}
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Enviar por WhatsApp</span>
          </button>
        </div>
      )}

      <h3>Productos en el carrito:</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.imageUrl} alt={item.name} width="50" />
            {item.name} - Q{item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShareCart;
