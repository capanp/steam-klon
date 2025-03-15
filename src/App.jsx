import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

const App = () => {
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

export default App;
