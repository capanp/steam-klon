import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Store from './components/store/store';
import StoreApp from './components/storeapp/storeapp';


const App = () => {
  return (
    <Router>
      <BodyBackgroundManager />
      <Routes>
        <Route path='/' element={<Store />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/app/*' element={<StoreApp />}></Route>

        {/* 404 Page */}
        <Route path="*" element={<StoreApp />} />
      </Routes>
    </Router>
  );
};

function BodyBackgroundManager() {
  const location = useLocation();

  useEffect(() => {
      if ((location.pathname).split('/')[1] === "app") {
        document.body.style.background = "#1b2838";
      } else {
        // Farklı bir sayfaya geçince eski stili kaldır
        document.body.style.background = "url(./src/assets/colored_body_top.png) center top no-repeat #1b2838";
      }
  }, [location]);

  return null; // Bu bileşen, sadece arkaplanı yönetmek için var.
}

export default App;
