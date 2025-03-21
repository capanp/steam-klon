import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./app-media.css";

import MediaShadow from "../../assets/game_page_background_shadow.png";

const AppMedia = () => {
  const location = useLocation();
  const appPath = location.pathname.split("/")[2];
  const appName = appPath.replaceAll("_", " ");
  const appDate = "19 Mar 2019";

  useEffect(() => {
    document.title = appName + " Steam'de";
  }, []);

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
              <video
                controls
                src={`/app/${appPath}/video/video.webm`}
                width="600"
                height="335"
              >
                Tarayıcınız videoyu desteklemiyor.
              </video>
            </div>
            <div className="game-bot-media">
              <img
                src={`/app/${appPath}/images/1.jpg`}
                width="115px"
                height="65px"
                alt=""
              />
              <img
                src={`/app/${appPath}/images/2.jpg`}
                width="115px"
                height="65px"
                alt=""
              />
              <img
                src={`/app/${appPath}/images/3.jpg`}
                width="115px"
                height="65px"
                alt=""
              />
              <img
                src={`/app/${appPath}/images/4.jpg`}
                width="115px"
                height="65px"
                alt=""
              />
              <img
                src={`/app/${appPath}/images/5.jpg`}
                width="115px"
                height="65px"
                alt=""
              />
              <img
                src={`/app/${appPath}/images/6.jpg`}
                width="115px"
                height="65px"
                alt=""
              />
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
              Yılın Oyunu - Game Awards 2019 2019'un En İyi Aksiyon Oyunu - IGN
              Bloodborne ve Dark Souls serisinin yaratıcısı FromSoftware
              tarafından geliştirilen ödüllü macera oyununda intikama giden
              yolda emin adımlarla ilerle. İntikamını al. Onurunu geri kazan.
              Ustalıkla öldür.
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
              Çıkış Tarihi <span>{appDate}</span>
            </div>
            <div className="game-developer">
              <div>
                Geliştirici: <span>FromSoftware, Inc.</span>
              </div>
              <div>
                Yayıncı: <span>Activision</span>
              </div>
            </div>
            <div className="game-tags">
              <div>
                Bu ürün için popüler kullanıcı tanımlı etiketler:
              </div>
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
