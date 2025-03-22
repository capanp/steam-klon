import React, { useState, useEffect } from "react";
import "./storeapp.css";
import { notFound } from 'next/navigation';

import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/only-header";
import AppMedia from "../../components/app-media/app-media";
import AppContent from "../../components/app-content/app-content";
import Footer from "../../components/footer/footer";

export const runtime = 'edge'; // Cloudflare Pages için gerekli

const StoreApp = ({ params }) => {
  const [metadata, setMetadata] = useState(null);
  const { appPath } = params;

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/app/${appPath}/data.json`);
        if (!response.ok) throw new Error("Not found");

        const data = await response.json();
        setMetadata({
          title: appPath.replaceAll("_", " "),
          description: data.description,
          openGraph: {
            site: "Steam - Klon",
            title: appPath.replaceAll("_", " "),
            description: data.description,
            images: [`${process.env.NEXT_PUBLIC_BASE_URL}/app/${appPath}/thumbnail.jpg`],
          },
        });
      } catch (error) {
        notFound();
      }
    };

    fetchMetadata();
  }, [appPath]);

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
