import { StrictMode } from "react"; // React'in StrictMode bileşenini içe aktarıyor, geliştirme sırasında uyarılar gösterir
import { createRoot } from "react-dom/client"; // React 18 ile gelen yeni render yöntemi için createRoot'u içe aktarıyor
import "./index.css"; // Global CSS dosyasını içe aktarıyor
import App from "./App.jsx"; // App bileşenini içe aktarıyor
import { BrowserRouter } from "react-router-dom"; // React Router için BrowserRouter bileşenini içe aktarıyor
import CoinContextProvider from "./context/CoinContext.jsx"; // Coin verilerini yönetmek için oluşturulan Context Provider'ı içe aktarıyor

createRoot(document.getElementById("root")).render( // React uygulamasını "root" id'li HTML elemanına bağlıyor
  <StrictMode> {/* Geliştirme sırasında hataları yakalamak için StrictMode kullanılıyor */}
    <BrowserRouter> {/* Uygulamanın yönlendirmelerini sağlamak için Router bileşeni */}
      <CoinContextProvider> {/* Uygulamanın genelinde kullanılacak CoinContext'i sağlıyor */}
        <App /> {/* Ana uygulama bileşeni */}
      </CoinContextProvider>
    </BrowserRouter>
  </StrictMode>
);
