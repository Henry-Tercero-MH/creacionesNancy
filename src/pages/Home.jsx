import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Banner from "../components/Banner";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div style={{ backgroundColor: "#042326", color: "#D1D5DB" }}>
      <Banner />
      <ProductList cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Home;
