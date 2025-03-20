import React from "react";
import './storeapp.css'

import Navbar from "../navbar/navbar";
import Header from "../header/only-header";
import AppMedia from "../app-media/app-media";
import AppContent from "../app-content/app-content";
import Footer from '../footer/footer'

const StoreApp = () => {
  return (
    <div>
      <Navbar />
      <div className="wrap">
        <Header />
        <AppMedia />
        <AppContent />
        <Footer />
      </div>
    </div>
  );
};

export default StoreApp;
