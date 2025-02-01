import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShareCart from "../components/ShareCart";
import { useState } from "react";
import ViewCart from "../components/Viewcart";

const AppRoutes = () => {
  const [cartItems, setCartItems] = useState([]); // Estado para manejar el carrito
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/productos" element={<Productos />} />
        <Route
          path="/view-cart"
          element={
            <ViewCart cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
