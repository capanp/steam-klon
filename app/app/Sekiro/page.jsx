import React from "react";
import "./storeapp.css";

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/only-header";
import AppMedia from "../../components/app-media/app-media";
import AppContent from "../../components/app-content/app-content";
import Footer from "../../components/footer/footer";

export const metadata = {
  title: 'Sekiro™: Shadows Die Twice - GOTY Edition',
  description: 'Sekiro™: Shadows Die Twice ile intikam yolculuğuna çık. Efsanevi bir aksiyon oyunu seni bekliyor!',
  openGraph: {
    site: 'Steam - Klon',
    title: 'Sekiro™: Shadows Die Twice - GOTY Edition',
    description: 'Sekiro™: Shadows Die Twice ile intikam yolculuğuna çık. Efsanevi bir aksiyon oyunu seni bekliyor!',
    images: ['https://store.steampowered.com/path-to-image.jpg'],
    type: 'product',
    price: {
      amount: '59.99',
      currency: 'USD'
    },
    rating: '4.5',
    reviewCount: '230336',
  },
};

const StoreApp = () => {
  return (
    <>
      <Navbar />
      <div className="wrap">
        <Header />
        <AppMedia />
        <AppContent />
      </div>
      <Footer />
    </>
  );
};

export default StoreApp;
