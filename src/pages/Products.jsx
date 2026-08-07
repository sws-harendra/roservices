import React from "react";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProductHero from "../components/Products/ProductHero.jsx";
import ProductList from "../components/Products/ProductList.jsx";

function Products() {
  return (
    <div>
      <Navbar />
      
      <main>
        <ProductHero />
        <ProductList />
      </main>
      
      <Footer />
    </div>
  );
}

export default Products;
