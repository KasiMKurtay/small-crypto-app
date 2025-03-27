import React from "react"; // React kütüphanesini içe aktarıyor

import Navbar from "./components/Navbar/navbar"; // Navbar bileşenini içe aktarıyor
import { Routes, Route } from "react-router-dom"; // React Router'dan Routes ve Route bileşenlerini içe aktarıyor
import Home from "./pages/Home/Home.jsx"; // Home sayfa bileşenini içe aktarıyor
import Coin from "./pages/Coin/Coin.jsx"; // Coin sayfa bileşenini içe aktarıyor
import Footer from "./components/Footer/Footer.jsx"; // Footer bileşenini içe aktarıyor

const App = () => { // App bileşenini tanımlıyor
  return (
    <div className="app"> {/* Ana kapsayıcı div */}
      <Navbar /> {/* Navbar bileşenini çağırıyor */}
      <Routes> {/* Uygulamanın yönlendirme yapısını belirtiyor */}
        <Route path="/" element={<Home />} /> {/* Ana sayfayı (Home bileşeni) "/" yoluna yönlendiriyor */}
        <Route path="/coin/:coinID" element={<Coin />} /> {/* Dinamik coin detay sayfasını "/coin/:coinID" yoluna yönlendiriyor */}
      </Routes>
      <Footer /> {/* Footer bileşenini çağırıyor */}
    </div>
  );
};

export default App; // App bileşenini dışa aktarıyor
