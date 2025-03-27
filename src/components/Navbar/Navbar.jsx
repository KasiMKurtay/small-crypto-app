import React, { useContext } from "react"; // React ve useContext hook'unu içe aktarıyor
import "./Navbar.css"; // Navbar bileşeni için CSS dosyasını içe aktarıyor
import logo from "../../assets/logo.png"; // Logo resmini içe aktarıyor
import arrow_icon from "../../assets/arrow_icon.png"; // Ok simgesi resmini içe aktarıyor
import { CoinContext } from "../../context/CoinContext"; // CoinContext'i içe aktarıyor

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext); // CoinContext'ten setCurrency fonksiyonunu alıyor

  const currencyHandler = (e) => { // Para birimi değiştiğinde çalışacak fonksiyon
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" }); // USD seçildiğinde ayarlar
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" }); // EUR seçildiğinde ayarlar
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" }); // Varsayılan olarak USD ayarlar
        break;
      }
    }
  };

  return (
    <div className="navbar"> {/* Navbar bileşeni */}
      <img src={logo} alt="logo.png" className="logo" /> {/* Logo görüntüsü */}
      <ul> {/* Menü bağlantıları */}
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right"> {/* Navbar sağ tarafı */}
        <select onChange={currencyHandler}> {/* Para birimi seçme */}
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
        <button> {/* Kayıt ol butonu */}
          Sign Up <img src={arrow_icon} alt="arrow.png" />
        </button>
      </div>
    </div>
  );
};

export default Navbar; // Navbar bileşenini dışa aktarıyor