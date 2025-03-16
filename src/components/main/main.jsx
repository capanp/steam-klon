import React from "react";
import "./main.css";
import Action from "../../assets/action.webp";
import Rpg from "../../assets/rpg.webp";
import Strategy from "../../assets/strategy.webp";
import Horror from "../../assets/horror.webp";
import Dump from "../../assets/dump.jpg";

import ds from "../../assets/games/dark-souls.jpg";
import got from "../../assets/games/ghost-of-tsushima.jpg";
import sekiro from "../../assets/games/sekiro.jpg";
import doom from "../../assets/games/doom-eternal.jpg";
import hades from "../../assets/games/hades.jpg";
import cult from "../../assets/games/cult.jpg";
import resident from "../../assets/games/resident.jpg";
import ff14 from "../../assets/games/ff14.jpg";
import gow from "../../assets/games/gow.jpg";
import ets from "../../assets/games/ets2.jpg";

import deck from "../../assets/decklogo.png";
import steamDeckVideo from "../../assets/video/deck_banner_animated_webm_turkish.webm";

function Main() {
  const handleClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/cagan-pinar/";
  };

  return (
    <main className="main-content">
      <div className="top-header-container">
        <h2>Özel Teklifler</h2>
        <div>Daha Fazlasına Göz Atın</div>
      </div>
      <div className="top-container">
        <div className="header-box">
          <img src={ds} width="306" height="260" alt="First" />
          <div className="header-info">
            <h2>Hafta Ortası Fırsatı</h2>
            <p>2030 13 Mar @ 20:00 Tarihinde sona erecek.</p>
            <div className="discount-header-container">
              <div className="discount-percentage">-50%</div>
              <div className="discount-header-price">
                <div className="discount-original">$24.99</div>
                <div className="discount-now">$12.49</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-box">
          <img src={got} width="306" height="260" alt="Second" />
          <div className="header-info">
            <h2>Hafta Ortası Fırsatı</h2>
            <p>2030 13 Mar @ 20:00 Tarihinde sona erecek.</p>
            <div className="discount-header-container">
              <div className="discount-percentage">-33%</div>
              <div className="discount-header-price">
                <div className="discount-original">$59.99</div>
                <div className="discount-now">$40.19</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-aside">
          <div className="normal-box">
            <img src={sekiro} width="306" height="143" alt="Third" />
            <div className="normal-info">
              <h2>Günün Fırsatı</h2>
              <div className="discount-container">
                <div className="discount-percentage">-50%</div>
                <div className="discount-price">
                  <div className="discount-original">$59.99</div>
                  <div className="discount-now">$29.99</div>
                </div>
              </div>
            </div>
          </div>
          <div className="normal-box normal-last">
            <img src={doom} width="306" height="143" alt="Fourth" />
            <div className="normal-info">
              <h2>Günün Fırsatı</h2>
              <div className="discount-container">
                <div className="discount-percentage">-75%</div>
                <div className="discount-price">
                  <div className="discount-original">$23.99</div>
                  <div className="discount-now">$5.99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category-container">
        <h2>Kategorilere Göre Göz Atın</h2>
        <div className="categorys">
          <div className="border">
            <img src={Action} width="225" height="225" alt="" />
            <div className="border-text">
              <span>Aksiyon</span>
            </div>
          </div>
          <div className="border">
            <img src={Rpg} width="225" height="225" alt="" />
            <div className="border-text">
              <span>Rpg</span>
            </div>
          </div>
          <div className="border">
            <img src={Strategy} width="225" height="225" alt="" />
            <div className="border-text">
              <span>Strateji</span>
            </div>
          </div>
          <div className="border">
            <img src={Horror} width="225" height="225" alt="" />
            <div className="border-text">
              <span>Korku</span>
            </div>
          </div>
        </div>
      </div>

      <div className="line-container">
        <div className="game-header">
          <img src={deck} width="12" height="17" alt="" />
          <h2>Steam Deck'te En Çok Oynanan</h2>
        </div>
        <div className="game-container">
          <div className="game">
            <img src={hades} width="229" height="105" alt="" />
            <div>
              <span>$9.99</span>
            </div>
          </div>
          <div className="game">
            <img src={cult} width="229" height="105" alt="" />
            <div>
              <span>$29.99</span>
            </div>
          </div>
          <div className="game">
            <img src={resident} width="229" height="105" alt="" />
            <div>
              <span>$39.99</span>
            </div>
          </div>
          <div className="game">
            <img src={ff14} width="229" height="105" alt="" />
            <div>
              <span>$39.99</span>
            </div>
          </div>
        </div>
      </div>

      <div className="video-container">
        <video loop muted autoPlay src={steamDeckVideo}></video>
      </div>

      <div className="redirect-container">
        <p className="porti-text">
          Aşağıdaki buton ile linkedinime göz atabilirsin.
        </p>
        <button className="button" onClick={handleClick}>
          Linkedin'e Yönlendir
        </button>
        <p className="porti-text">
          Ya da portfolyoma{" "}
          <a href="https://capanp.github.io/" target="_blank">
            buradan
          </a>{" "}
          ulaşabilirsin.
        </p>
      </div>
      <div className="recommed-container">
        <h2>Steam'e Göz Atın</h2>
        <div className="recommeds">
          <div className="new">
            <a href="">Yeni Çıkanlar</a>
          </div>
          <div className="discount">
            <a href="">Özel Fırsatlar</a>
          </div>
          <div className="free">
            <a href="">Ücretsiz Oyunlar</a>
          </div>
          <div className="user">
            <a href="">Kullanıcı Etiketleri</a>
          </div>
        </div>
      </div>
      <div className="line-container-bot">
        <h2>Sizin İçin Önerilenler</h2>
        <div className="game-container">
          <div className="game">
            <img src={gow} width="229" height="105" alt="" />
            <div>
              <span>$19.99</span>
            </div>
          </div>
          <div className="game">
            <img src={ets} width="229" height="105" alt="" />
            <div>
              <span>$49.99</span>
            </div>
          </div>
          <div className="game">
            <img src={hades} width="229" height="105" alt="" />
            <div>
              <span>$9.99</span>
            </div>
          </div>
          <div className="game">
            <img src={ff14} width="229" height="105" alt="" />
            <div>
              <span>$39.99</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
