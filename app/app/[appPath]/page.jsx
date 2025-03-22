import React from "react";
import "./storeapp.css";
import { notFound } from 'next/navigation';

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/only-header";
import AppMedia from "../../components/app-media/app-media";
import AppContent from "../../components/app-content/app-content";
import Footer from "../../components/footer/footer";


export async function generateMetadata({ params }) {
  const { appPath } = await params;
  console.log(appPath)
  const appName = appPath.replaceAll("_", " ");

  // API veya public dosyalar üzerinden kontrol
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/app/${appPath}/data.json`);

  if (!response.ok) {
    // Eğer veri bulunamazsa, 404 yönlendirmesi
    notFound();
  }

  const data = await response.json();

  return {
    title: appName,
    description: data.description,
    openGraph: {
      site: "Steam - Klon",
      title: appName,
      description: data.description,
      images: [`${process.env.NEXT_PUBLIC_BASE_URL}/app/${appPath}/thumbnail.jpg`],
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
