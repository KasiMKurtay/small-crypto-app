import { createContext, useEffect, useState } from "react"; // React'in context API ve hooklarını içe aktarır

export const CoinContext = createContext(); // Context oluşturulur

const CoinContextProvider = (props) => { // Context sağlayıcı bileşeni oluşturulur
  const [allCoin, setAllCoin] = useState([]); // Tüm coin verilerini tutan state
  const [currency, setCurrency] = useState({ // Kullanılan para birimini tutan state
    name: "usd", // Varsayılan para birimi: USD
    symbol: "$", // Varsayılan sembol: $
  });

  const fetchAllCoin = async () => { // API'den kripto para verilerini çeken fonksiyon
    const options = {
      method: "GET",
      headers: {
        accept: "application/json", // JSON formatında veri kabul edilir
        "x-cg-demo-api-key": "CG-LKMHuf3g7UcsZipwhHp3PgPu", // API anahtarı
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, // Seçilen para birimine göre API çağrısı yapar
      options
    )
      .then((res) => res.json()) // Gelen yanıtı JSON formatına çevirir
      .then((response) => setAllCoin(response)) // Veriyi state'e kaydeder
      .catch((err) => console.error(err)); // Hata olursa konsola yazdırır
  };

  useEffect(() => {
    fetchAllCoin(); // Sayfa yüklendiğinde ve currency değiştiğinde API çağrısını yeniler
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const contextValue = {
    allCoin, currency, setCurrency // Context içinde paylaşılacak veriler
  };

  return (
    <CoinContext.Provider value={contextValue}> {/* Context bileşenleri sarmalar */}
      {props.children} {/* Çocuk bileşenleri render eder */}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider; // Bileşeni dışa aktarır
