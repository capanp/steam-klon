import React from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Carousel from "./components/carousel/carousel";
import Main from './components/main/main'
import Footer from './components/footer/footer'

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
