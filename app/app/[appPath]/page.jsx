export const runtime = 'edge';

import React from "react";
import "./storeapp.css";
import { notFound } from 'next/navigation';

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/only-header";
import AppMedia from "../../components/app-media/app-media";
import AppContent from "../../components/app-content/app-content";
import Footer from "../../components/footer/footer";


export async function generateMetadata({ params }) {
    console.log(params)

    return {
      title: "appName",
      description: "ata.description",
      openGraph: {
        site: "Steam - Klon",
        title:' appName',
        description: 'data.description',
      },
    };
}


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
