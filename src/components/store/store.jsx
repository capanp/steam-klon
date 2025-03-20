import React from "react";
import './store.css'

import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Carousel from "../carousel/carousel";
import Main from '../main/main'
import Footer from '../footer/footer'

const Store = () => {
  return (
    <div>
      <Navbar />
      <div className="wrap">
        <Header />
        <Carousel />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Store;
