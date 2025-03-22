import Head from 'next/head';
import './store.css'

import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Carousel from "./components/carousel/carousel";
import Main from './components/main/main'
import Footer from './components/footer/footer'

export const metadata = {
  title: "Steam'e Hoş Geldiniz",
  description: "Next.js (React) ile kopyalanmış bir Steam klonu.",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Steam'e Hoş Geldiniz</title>
        <meta name="description" content="Bu, Next.js ile oluşturulmuş bir ana sayfadır." />
      </Head>
      <Navbar />
      <div className="wrap">
        <Header />
        <Carousel />
        <Main />
      </div>
      <Footer />
    </>
  );
}