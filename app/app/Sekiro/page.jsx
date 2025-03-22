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
    images: ['https://cdn.discordapp.com/attachments/592060301579517953/1352995045544038470/image.png'],
  },
  priceCurrency: 'USD',
  priceAmount: '59.99',
  rating: '4.5',
  reviewCount: '230336',
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
