import React from "react";
import "./header.css";
import "../navbar/navbar.css";
import SearchBox from "../../assets/search_icon_btn.png";
import GiftCard from "../../assets/steamcards_promo_03.png";
import SteamDeck from "../../assets/steamdeck_promo_06.png";

const Header = () => {
  const menuSections = [
    {
      header: "Özel Kısımlar",
      items: [
        "Oynaması Ücretsiz",
        "Demolar",
        "Erken Erişim",
        "line",
        "Steam Deck",
        "Deck'te Mükemmel",
        "line",
        "Kontrolcü Uyumlu",
        "Remote Play",
        "line",
        "VR Ürünleri",
        "VR Donanımı",
        "line",
        "Yazılımlar",
        "Oyun Müzikleri",
        "line",
        "macOS",
        "Steam OS + Linux",
        "İnternet kafeler için",
      ],
    },
    {
      items: [
        "side-line",
      ],
    },
    {
      header: "Türler",
      items: [
        "Aksiyon",
        "Arcade ve Ritim",
        "Birinci Şahıs Nişancı",
        "Dövüş ve Dövüş Sanatları",
        "Hack & Slash",
        "Platform ve Runner",
        "Shoot 'Em Up",
        "Üçüncü Şahıs Nişancı",
        "Macera",
        "Basit Eğlence",
        "Bulmaca",
        "Gizli Nesne",
        "Görsel Roman",
        "Macera RYO",
        "Metroidvania",
        "Zengin Hikâye",
        "Rol Yapma",
        "Aksiyon RYO",
        "JRYO",
      ],
    },
    {
      items: [
        "Macera RYO",
        "Parti Tabanlı",
        "Rogue-Like",
        "Strateji RYO",
        "Sıra Tabanlı",
        "Simülasyon",
        "Hobi ve İş",
        "Sandbox ve Fizik",
        "Uzay ve Uçuş",
        "Yaşam ve Sürükleyici",
        "Çiftçilik ve Üretim",
        "İlişki",
        "İnşa ve Otomasyon",
        "Strateji",
        "Askeri",
        "Büyük Strateji ve 4X",
        "Gerçek Zamanlı Strateji",
        "Kart ve Kutu",
        "Kule Savunması",
        "Sıra Tabanlı Strateji",
      ],
    },
    {
      items: [
        "Şehir ve Yerleşim",
        "Spor ve Yarış",
        "Balıkçılık ve Avlanma",
        "Bireysel Sporlar",
        "Spor Simülasyonu",
        "Takım Sporları",
        "Tüm Sporlar",
        "Yarış",
        "Yarış Simülasyonu",
      ],
    },
  ];

  return (
    <header className="store-header">
      <aside className="left-header">
        <div className="gift-card-header">
          <img src={SteamDeck} width="180px" height="65px" alt="Gift Card" />
          <h2>
            <span className="left-header-text">STEAM DECK</span>
            <p className="left-header-des">Oyunlarınız Her Yerde</p>
          </h2>
        </div>
        <div className="gift-card-header">
          <img src={GiftCard} width="180px" height="65px" alt="Gift Card" />
          <h2>
            <span className="left-header-text">STEAM Hediye Kartları</span>
            <p className="left-header-des">Oyun Hediye Edin</p>
          </h2>
        </div>
        <div className="basic-header">
          <h2>Tavsiyeler</h2>
          <p>Arkadaşlar Tarafından</p>
          <p>Küratörler Tarafından</p>
          <p>Etiketler</p>
        </div>
        <div className="basic-header">
          <h2>Kategorilere Göz At</h2>
          <p>Çok Satanlar</p>
          <p>Yeni Çıkanlar</p>
          <p>Özel Fırsatlar</p>
          <p>VR Ürünleri</p>
          <p>Kontrolcü Uyumlu</p>
          <p>Arkadaşlar Tarafından</p>
          <p>Deck'te Mükemmel</p>
        </div>
        <div className="basic-header">
          <h2>Türlere Göre Göz At</h2>
          <p>Oynaması Ücretsiz</p>
          <p>Erken Erişim</p>
          <p>Aksiyon</p>
          <p>Basit Eğlence</p>
          <p>Bağımsız</p>
          <p>Devasa Çok Oyunculu</p>
          <p>Macera</p>
          <p>RYO</p>
          <p>Simülasyon</p>
          <p>Spor</p>
          <p>Strateji</p>
          <p>Yarış</p>
        </div>
      </aside>
      <div className="header-content">
        <div className="buttons">
          <ul>
            <li className="header-item">
              <a href="#">Mağazanız</a>
              <div className="popup-menu">
                <div className="popup-item">Ana Sayfa</div>
                <div className="popup-item">Topluluk Tavsiyeleri</div>
                <div className="popup-item">Son Görüntülenenler</div>
                <div className="popup-item">Steam Küratörleri</div>
              </div>
            </li>
            <li className="header-item">
              <a href="#">Yeni ve Kayda Değer</a>
              <div className="popup-menu popup-header-menu">
                <div className="popup-alt-header-menu">
                  <div className="popup-header-item">Popüler</div>
                  <div className="popup-item">Çok Satanlar</div>
                  <div className="popup-item">En Çok Oynanlar</div>
                  <div className="popup-item">İstek Listesi</div>
                  <div className="popup-line"></div>
                  <div className="popup-header-item">
                    Haberler ve Güncellemeler
                  </div>
                  <div className="popup-item">Son Güncellemeler</div>
                </div>
                <div className="popup-side-line"></div>
                <div className="popup-alt-header-menu">
                  <div className="popup-header-item">
                    Promosyonlar ve Etkinlikler
                  </div>
                  <div className="popup-item">Özel Teklifler</div>
                  <div className="popup-item">İndirim Etkinlikleri</div>
                  <div className="popup-item">Steam Retrospektifi</div>
                  <div className="popup-item">Steam Next Fest</div>
                  <div className="popup-item">Steam Ödülleri</div>
                </div>
              </div>
            </li>
            <li className="header-item">
              <a href="#">Kategoriler</a>
              <div className="popup-menu popup-header-menu">
                {menuSections.map((section, index) => (
                  <div key={index} className="popup-alt-header-menu">
                    {section.header && (
                      <div className="popup-header-item">{section.header}</div>
                    )}
                    {section.items.map((item, idx) => {
                      if (item === "line") {
                        return <div key={idx} className="popup-line"></div>;
                      } else if (item === "side-line") {
                        return <div key={idx} className="popup-side-line"></div>;
                      } else {
                        return (
                          <div key={idx} className="popup-item">
                            {item}
                          </div>
                        );
                      }
                    })}
                  </div>
                ))}
                <div className="popup-side-line"></div>

                <div className="popup-alt-header-menu">
                  <div className="popup-header-item">Temalar</div>
                  <div className="popup-item">Anime</div>
                  <div className="popup-item">Açık Dünya</div>
                  <div className="popup-item">Bilim Kurgu ve Cyberpunk</div>
                  <div className="popup-item">Gizem ve Dedektiflik</div>
                  <div className="popup-item">Hayatta Kalma</div>
                  <div className="popup-item">Korku</div>
                  <div className="popup-item">Uzay</div>
                  <div className="popup-line"></div>
                  <div className="popup-header-item">Temalar</div>
                  <div className="popup-item">Eşli</div>
                  <div className="popup-item">MMO</div>
                  <div className="popup-item">Tek Oyunculu</div>
                  <div className="popup-item">Yerel Ağ</div>
                  <div className="popup-item">Yerel ve Parti</div>
                  <div className="popup-item">Çevrimiçi Rekabetçi</div>
                  <div className="popup-item">Çok Oyunculu</div>
                </div>
              </div>
            </li>
            <li className="header-item">
              <a href="#">Puan Dükkânı</a>
            </li>
            <li className="header-item">
              <a href="#">Haberler</a>
            </li>
            <li className="header-item">
              <a href="#">Laboratuvar</a>
            </li>
          </ul>
        </div>
        <div className="search">
          <div className="input-space">
            <div className="input-box">
              <input type="text" size="22" placeholder="ara" maxLength="64" />
              <a href="#" className="search-icon">
                <img src={SearchBox} width="25px" height="25px" alt="search" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
