import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Stage from "../components/Stage";
import Footer from "../components/Footer";

const Home = () => {
return (
<div className="container">
  <Stage/>
  <CategoryMenu />
  <ProductList />
  <Footer/>
  <Cart />
</div>
);
};

export default Home;
