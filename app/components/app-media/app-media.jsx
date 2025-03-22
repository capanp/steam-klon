"use client";

import React, { useState, useEffect } from "react";
import "./app-media.css";

import MediaShadow from "../../assets/game_page_background_shadow.png";
import AppVideoComponent from "../VideoComponent/AppVideoComponent";
import { usePathname } from "next/navigation";

async function fetchapp(appPath) {
  const response = await fetch(`/app/${appPath}/data.json`);
  const data = await response.json();
  return data;
}

const AppMedia = () => {
  const appPath = usePathname().split("/").at(-1);
  const appName = appPath.replaceAll("_", " ");
  const appDate = "19 Mar 2019";

  // State ile appData'yı yönet
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    async function getAppData() {
      const data = await fetchapp(appPath);
      setAppData(data); // Veriyi state'e kaydet
    }
    getAppData(); // Asenkron veri çekme işlemi
  }, [appPath]);

  console.log(appName);
  console.log(appData); // Verileri kontrol etmek için

  return (
    <div className="app-media-content">
      <div className="app-media">
        <div className="game-title">
          <p className="game-path-text">
            <a href="/">Tüm Oyunlar</a> &gt; <a href="">{appName}</a>
          </p>
          <h1>{appName}</h1>
        </div>
        <div className="game-media">
          <div className="game-medias">
            <div className="game-top-media">
              <AppVideoComponent
                src={`/app/${appPath}/video/video.webm`}
                width={600}
                height={335}
              >
                Tarayıcınız videoyu desteklemiyor.
              </AppVideoComponent>
            </div>
            <div className="game-bot-media">
              {[1, 2, 3, 4, 5, 6].map((imgNum) => (
                <img
                  key={imgNum}
                  src={`/app/${appPath}/images/${imgNum}.jpg`}
                  width="115px"
                  height="65px"
                  alt={`Image ${imgNum}`}
                />
              ))}
            </div>
          </div>
          <div className="game-media-description">
            <img
              src={`/app/${appPath}/thumbnail.jpg`}
              alt={`${appPath}-thumbnail`}
              width="325"
              height="150"
            />
            <p>
              {appData ? appData.description : "Veri yükleniyor..."}
            </p>
            <div className="game-review">
              <div>
                En Son İncelemer: <span>Çok Olumlu</span>
              </div>
              <div>
                Bütün İncelemer: <span>Çok Olumlu</span>
              </div>
            </div>
            <div className="game-date">
              Çıkış Tarihi <span>{appData ? appData.releaseDate : "Yükleniyor..."}</span>
            </div>
            <div className="game-developer">
              <div>
                Geliştirici: <span>{appData ? appData.developer : "Yükleniyor..."}</span>
              </div>
              <div>
                Yayıncı: <span>{appData ? appData.publisher : "Yükleniyor..."}</span>
              </div>
            </div>
            <div className="game-tags">
              <div>Bu ürün için popüler kullanıcı tanımlı etiketler:</div>
              <div className="gam-tag-div">
                <div>Souls-Like</div>
                <div>Zor</div>
                <div>Aksiyon</div>
                <div>Tek Oyunculu</div>
                <div>Ninja</div>
              </div>
            </div>
          </div>
        </div>
        <div className="game-sign-up">
          Bu öğeyi istek listenize eklemek, takip etmek veya yok sayıldı olarak
          işaretlemek için <a href="/">giriş yapın</a>
        </div>
      </div>
      <div className="game-shadow"></div>
    </div>
  );
};

export default AppMedia;
