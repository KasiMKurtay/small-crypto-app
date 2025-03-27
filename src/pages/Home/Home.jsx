import React, { useContext, useEffect, useState } from "react"; // React ve gerekli hook'ları içe aktarıyor
import "./Home.css"; // Sayfaya özel stil dosyasını içe aktarıyor
import { CoinContext } from "../../context/CoinContext"; // CoinContext'ten verileri almak için içe aktarıyor

const Home = () => { // Home bileşeni tanımlanıyor
  const { allCoin, currency } = useContext(CoinContext); // CoinContext'ten tüm coin verileri ve para birimi bilgisi alınıyor
  const [displayCoin, setDisplayCoin] = useState([]); // Gösterilecek coin listesini yönetmek için state oluşturuluyor

  useEffect(() => {
    setDisplayCoin(allCoin); // allCoin güncellendiğinde displayCoin state'ine atanıyor
  }, [allCoin]); // allCoin değiştiğinde useEffect çalışıyor

  return (
    <div className="home"> {/* Ana kapsayıcı div */}
      <div className="hero"> {/* Hero bölümü, sayfanın üst kısmındaki tanıtım alanı */}
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace. Sign Up to
          explore more about cryptos.
        </p>
        <form> {/* Kullanıcının kripto para araması yapabileceği form */}
          <input type="text" placeholder="Search crypto.." /> {/* Arama kutusu */}
          <button type="submit">Search</button> {/* Arama butonu */}
        </form>
      </div>

      <div className="crypto-table"> {/* Kripto para listesinin olduğu bölüm */}
        <div className="table-layout"> {/* Tablo başlıklarını içeren satır */}
          <p>#</p> {/* Sıralama numarası */}
          <p>Coins</p> {/* Coin ismi */}
          <p>Price</p> {/* Coin fiyatı */}
          <p style={{ textAlign: "center" }}>24H Change</p> {/* 24 saatlik değişim yüzdesi */}
          <p className="market-cap">Market Cap</p> {/* Piyasa değeri */}
        </div>

        {displayCoin.slice(0, 10).map((item, index) => ( // İlk 10 coini ekrana yazdırıyor
          <div className="table-layout" key={index}> {/* Her coin için bir satır oluşturuluyor */}
            <p>{item.market_cap_rank}</p> {/* Coinin piyasa sıralaması */}
            <div> {/* Coinin logosu ve adı */}
              <img src={item.image} alt="currency.image" /> {/* Coin logosu */}
              <p>{item.name + " -" + item.symbol}</p> {/* Coin adı ve sembolü */}
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()} {/* Coinin anlık fiyatı */}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"} // Fiyat değişimi pozitifse yeşil, negatifse kırmızı renkte gösterilir
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100} {/* Fiyat değişim yüzdesi */}
            </p>
            <p className="market-cap">
              {currency.symbol}
              {item.market_cap.toLocaleString()} {/* Coinin piyasa değeri */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; // Home bileşenini dışa aktarıyor
