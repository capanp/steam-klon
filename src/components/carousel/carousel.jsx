import { useState, useEffect } from "react";
import "./carousel.css";
import win from "../../assets/icon_platform_win.png";

import first from "../../assets/games/cs2-main.jpg";
import first1 from "../../assets/games/cs2-1.jpg";
import first2 from "../../assets/games/cs2-2.jpg";
import first3 from "../../assets/games/cs2-3.jpg";
import first4 from "../../assets/games/cs2-4.jpg";

import second from "../../assets/games/rust-main.jpg";
import second1 from "../../assets/games/rust-1.jpg";
import second2 from "../../assets/games/rust-2.jpg";
import second3 from "../../assets/games/rust-3.jpg";
import second4 from "../../assets/games/rust-4.jpg";

import third from "../../assets/games/bg3-main.jpg";
import third1 from "../../assets/games/bg3-1.jpg";
import third2 from "../../assets/games/bg3-2.jpg";
import third3 from "../../assets/games/bg3-3.jpg";
import third4 from "../../assets/games/bg3-4.jpg";

import fourth from "../../assets/games/hello-main.jpg";
import fourth1 from "../../assets/games/hello-1.jpg";
import fourth2 from "../../assets/games/hello-2.jpg";
import fourth3 from "../../assets/games/hello-3.jpg";
import fourth4 from "../../assets/games/hello-4.jpg";

import fifth from "../../assets/games/kingdom-main.jpg";
import fifth1 from "../../assets/games/kingdom-1.jpg";
import fifth2 from "../../assets/games/kingdom-2.jpg";
import fifth3 from "../../assets/games/kingdom-3.jpg";
import fifth4 from "../../assets/games/kingdom-4.jpg";

import sixth from "../../assets/games/r6-main.jpg";
import sixth1 from "../../assets/games/r6-1.jpg";
import sixth2 from "../../assets/games/r6-2.jpg";
import sixth3 from "../../assets/games/r6-3.jpg";
import sixth4 from "../../assets/games/r6-4.jpg";

function Carousel() {
  const [mainFirstImage, setFirstMainImage] = useState(first);
  const [mainSecondImage, setSecondMainImage] = useState(second);
  const [mainThirdImage, setThirdMainImage] = useState(third);
  const [mainFourthImage, setFourthMainImage] = useState(fourth);
  const [mainFifthImage, setFifthMainImage] = useState(fifth);
  const [mainSixthImage, setSixthMainImage] = useState(sixth);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const divs = document.querySelectorAll(".carousel-items > a");
    const thumbs = document.querySelectorAll(".carousel-thumbs > .thumb");

    const updateVisibility = () => {
      divs.forEach((div, index) => {
        if (index === currentIndex) {
          div.classList.remove("hided");
          div.classList.add("fadeIn");
          thumbs[index].classList.add("selected-thumb");
        } else {
          div.classList.add("hided");
          div.classList.remove("fadeIn");
          thumbs[index].classList.remove("selected-thumb");
        }
      });
    };

    //carouseli güncelle
    updateVisibility();

    // 5 saniyelik değişim
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % divs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]); //değiştiğinde tekrarlanacak

  // Sağ ve sol butonlarına tıklayınca manuel değişim
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % 6);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? 5 : prev - 1));

  const goSlide = (array) => setCurrentIndex(array);

  const carouselStyle = {
    display: "flex",
    position: "absolute",
    width: "100%",
  };

  return (
    <div className="carousel-wrap">
      <div className="home-carousel">
        <h2>Öne Çıkanlar ve Tavsiye Edilenler</h2>
        <div className="carousel-content">
          <div className="carousel-items">
            <a style={carouselStyle} href="#">
              <div className="carousel-image">
                <img src={mainFirstImage} width="616" height="353" alt="" />
              </div>
              <div className="carousel-info">
                <div className="carousel-top">
                  <h1>Counter Strike 2</h1>
                  <div className="app-images"></div>
                  <div>
                    <div className="carousel-images">
                      <img
                        src={first1}
                        width="128"
                        height="60"
                        alt=""
                        onMouseEnter={() => setFirstMainImage(first1)}
                        onMouseLeave={() => setFirstMainImage(first)}
                      />
                      <img
                        src={first2}
                        width="128"
                        height="60"
                        alt=""
                        onMouseEnter={() => setFirstMainImage(first2)}
                        onMouseLeave={() => setFirstMainImage(first)}
                      />
                    </div>
                    <div className="carousel-images">
                      <img
                        src={first3}
                        width="128"
                        height="70"
                        alt=""
                        onMouseEnter={() => setFirstMainImage(first3)}
                        onMouseLeave={() => setFirstMainImage(first)}
                      />
                      <img
                        src={first4}
                        width="128"
                        height="70"
                        alt=""
                        onMouseEnter={() => setFirstMainImage(first4)}
                        onMouseLeave={() => setFirstMainImage(first)}
                      />
                    </div>
                  </div>
                  <div className="top-reason">Yayınlandı</div>
                  <div className="sold-tag">En Çok Satan</div>
                </div>
                <div className="carousel-bottom">
                  <div className="carousel-price">Oynaması Ücretsiz</div>
                  <div className="platform-logo">
                    <img src={win} height="20" width="20" alt="" />
                  </div>
                </div>
              </div>
            </a>
            <a className="hided" style={carouselStyle} href="#">
              <div className="carousel-image">
                <img src={mainSecondImage} width="616" height="353" alt="" />
              </div>
              <div className="carousel-info">
                <div className="carousel-top">
                  <h1>Rust</h1>
                  <div className="app-images"></div>
                  <div>
                    <div className="carousel-images">
                      <img
                        src={second1}
                        width="128"
                        height="60"
                        alt=""
                        onMouseEnter={() => setSecondMainImage(second1)}
                        onMouseLeave={() => setSecondMainImage(second)}
                      />
                      <img
                        src={second2}
                        width="128"
                        height="60"
                        alt=""
                        onMouseEnter={() => setSecondMainImage(second2)}
                        onMouseLeave={() => setSecondMainImage(second)}
                      />
                    </div>
                    <div className="carousel-images">
                      <img
                        src={second3}
                        width="128"
                        height="70"
                        alt=""
                        onMouseEnter={() => setSecondMainImage(second3)}
                        onMouseLeave={() => setSecondMainImage(second)}
                      />
                      <img
                        src={second4}
                        width="128"
                        height="70"
                        alt=""
                        onMouseEnter={() => setSecondMainImage(second4)}
                        onMouseLeave={() => setSecondMainImage(second)}
                      />
                    </div>
                  </div>
                  <div className="top-reason">Yayınlandı</div>
                  <div className="sold-tag">En Çok Satan</div>
                </div>
                <div className="carousel-bottom">
                  <div className="carousel-price">$39.99</div>
                  <div className="platform-logo">
                    <img src={win} height="20" width="20" alt="" />
                  </div>
                </div>
              </div>
            </a>
            <a className="hided" style={carouselStyle} href="#">
              <div className="carousel-image">
                <img src={mainThirdImage} width="616" height="353" alt="" />
              </div>
              <div className="carousel-info">
                <div className="carousel-top">
                  <h1>Baldur's Gate 3</h1>
                  <div className="app-images"></div>
                  <div>
                    <div className="carousel-images">
                      <img
                        src={third1}
                        width="128"
                        height="60"
                        alt=""
                        onMouseEnter={() => setThirdMainImage(third1)}
                        onMouseLeave={() => setThirdMainImage(third)}
                      />
                      <img
                        src={third2}
                        width="128"
                        height="60"
                        alt=""
                        onMouseEnter={() => setThirdMainImage(third2)}
                        onMouseLeave={() => setThirdMainImage(third)}
                      />
                    </div>
                    <div className="carousel-images">
                      <img
                        src={third3}
                        width="128"
                        height="70"
                        alt=""
                        onMouseEnter={() => setThirdMainImage(third3)}
                        onMouseLeave={() => setThirdMainImage(third)}
                      />
                      <img
                        src={third4}
                        width="128"
                        height="70"
                        alt=""
                        onMouseEnter={() => setThirdMainImage(third4)}
                        onMouseLeave={() => setThirdMainImage(third)}
                      />
                    </div>
                  </div>
                  <div className="top-reason">Yayınlandı</div>
                  <div className="sold-tag">En Çok Satan</div>
                </div>
                <div className="carousel-bottom">
                  <div className="carousel-price">$59.99</div>
                  <div className="platform-logo">
                    <img src={win} height="20" width="20" alt="" />
                  </div>
                </div>
              </div>
            </a>
            <a className="hided" style={carouselStyle} href="#">
              <div className="carousel-image">
                <img src={mainFourthImage} width="616" height="353" alt="" />
              </div>
              <div className="carousel-info">
                <div className="carousel-top">
                  <h1>Hello Kitty Island Adventure</h1>
                  <div className="app-images"></div>
                  <div>
                    <div className="carousel-images">
                      <img
                        src={fourth1}
                        width="128"
                        height="60"
                        alt=""
                        onMouseEnter={() => setFourthMainImage(fourth1)}
                        onMouseLeave={() => setFourthMainImage(fourth)}
                      />
                      <img
                        src={fourth2}
                        width="128"
                        height="60"
                        alt=""
                        onMouseEnter={() => setFourthMainImage(fourth2)}
                        onMouseLeave={() => setFourthMainImage(fourth)}
                      />
                    </div>
                    <div className="carousel-images">
                      <img
                        src={fourth3}
                        width="128"
                        height="70"
                        alt=""
                        onMouseEnter={() => setFourthMainImage(fourth3)}
                        onMouseLeave={() => setFourthMainImage(fourth)}
                      />
                      <img
                        src={fourth4}
                        width="128"
                        height="70"
                        alt=""
                        onMouseEnter={() => setFourthMainImage(fourth4)}
                        onMouseLeave={() => setFourthMainImage(fourth)}
                      />
                    </div>
                  </div>
                  <div className="top-reason">Yayınlandı</div>
                  <div className="sold-tag">En Çok Satan</div>
                </div>
                <div className="carousel-bottom">
                  <div className="carousel-price">$39.99</div>
                  <div className="platform-logo">
                    <img src={win} height="20" width="20" alt="" />
                  </div>
                </div>
              </div>
            </a>
            <a className="hided" style={carouselStyle} href="#">
              <div className="carousel-image">
                <img src={mainFifthImage} width="616" height="353" alt="" />
              </div>
              <div className="carousel-info">
                <div className="carousel-top">
                  <h1>Kingdom Come: Deliverance II</h1>
                  <div className="app-images"></div>
                  <div>
                    <div className="carousel-images">
                      <img
                        src={fifth1}
                        width="128"
                        height="60"
                        alt=""
                        onMouseEnter={() => setFifthMainImage(fifth1)}
                        onMouseLeave={() => setFifthMainImage(fifth)}
                      />
                      <img
                        src={fifth2}
                        width="128"
                        height="60"
                        alt=""
                        onMouseEnter={() => setFifthMainImage(fifth2)}
                        onMouseLeave={() => setFifthMainImage(fifth)}
                      />
                    </div>
                    <div className="carousel-images">
                      <img
                        src={fifth3}
                        width="128"
                        height="70"
                        alt=""
                        onMouseEnter={() => setFifthMainImage(fifth3)}
                        onMouseLeave={() => setFifthMainImage(fifth)}
                      />
                      <img
                        src={fifth4}
                        width="128"
                        height="70"
                        alt=""
                        onMouseEnter={() => setFifthMainImage(fifth4)}
                        onMouseLeave={() => setFifthMainImage(fifth)}
                      />
                    </div>
                  </div>
                  <div className="top-reason">Yayınlandı</div>
                  <div className="sold-tag">En Çok Satan</div>
                </div>
                <div className="carousel-bottom">
                  <div className="carousel-price">$29.99</div>
                  <div className="platform-logo">
                    <img src={win} height="20" width="20" alt="" />
                  </div>
                </div>
              </div>
            </a>
            <a className="hided" style={carouselStyle} href="#">
              <div className="carousel-image">
                <img src={mainSixthImage} width="616" height="353" alt="" />
              </div>
              <div className="carousel-info">
                <div className="carousel-top">
                  <h1>Tom Clancy's Rainbow Six® Siege</h1>
                  <div className="app-images"></div>
                  <div>
                    <div className="carousel-images">
                      <img
                        src={sixth1}
                        width="128"
                        height="60"
                        alt=""
                        onMouseEnter={() => setSixthMainImage(sixth1)}
                        onMouseLeave={() => setSixthMainImage(sixth)}
                      />
                      <img
                        src={sixth2}
                        width="128"
                        height="60"
                        alt=""
                        onMouseEnter={() => setSixthMainImage(sixth2)}
                        onMouseLeave={() => setSixthMainImage(sixth)}
                      />
                    </div>
                    <div className="carousel-images">
                      <img
                        src={sixth3}
                        width="128"
                        height="70"
                        alt=""
                        onMouseEnter={() => setSixthMainImage(sixth3)}
                        onMouseLeave={() => setSixthMainImage(sixth)}
                      />
                      <img
                        src={sixth4}
                        width="128"
                        height="70"
                        alt=""
                        onMouseEnter={() => setSixthMainImage(sixth4)}
                        onMouseLeave={() => setSixthMainImage(sixth)}
                      />
                    </div>
                  </div>
                  <div className="top-reason">Yayınlandı</div>
                  <div className="sold-tag">En Çok Satan</div>
                </div>
                <div className="carousel-bottom">
                  <div className="carousel-price">$19.99</div>
                  <div className="platform-logo">
                    <img src={win} height="20" width="20" alt="" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="arrow left" onClick={prevSlide}>
          <div></div>
        </div>
        <div className="arrow right" onClick={nextSlide}>
          <div></div>
        </div>
        <div className="carousel-thumbs">
          <div
            className="thumb selected-thumb"
            onClick={() => goSlide(0)}
          ></div>
          <div className="thumb" onClick={() => goSlide(1)}></div>
          <div className="thumb" onClick={() => goSlide(2)}></div>
          <div className="thumb" onClick={() => goSlide(3)}></div>
          <div className="thumb" onClick={() => goSlide(4)}></div>
          <div className="thumb" onClick={() => goSlide(5)}></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
