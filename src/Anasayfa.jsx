import React from 'react';
import { useHistory } from 'react-router-dom';
import './csssheets/Anasayfa.css'






function Anasayfa() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/form'); 
  };

    return (
      <div className='home-container'>
        <header>
          <div class="intro">
            <img src="./Assets/Iteration-1-assets/logo.svg" />
            <div class="slogan-container">
              <p class="firsat-metni">fırsatı kaçırma</p>
              <p class="slogan">KOD ACIKTIRIR PIZZA, DOYURUR</p>
              <button class="aciktim-button" onClick={handleClick}>ACIKTIM</button>
            </div>
          </div>
        </header>

        <section class="main-section-nav">
        <nav class="main-nav">
          <a href=""><img src="./Assets/Iteration-2-aseets/icons/1.svg"/>YENİ! Kore</a>
          <a href=""><img src="./Assets/Iteration-2-aseets/icons/2.svg"/>Pizza</a>
          <a href=""><img src="./Assets/Iteration-2-aseets/icons/3.svg"/>Burger</a>
          <a href=""><img src="./Assets/Iteration-2-aseets/icons/4.svg"/>Kızartmalar</a>
          <a href=""><img src="./Assets/Iteration-2-aseets/icons/5.svg"/>Fast food</a>
          <a href=""><img src="./Assets/Iteration-2-aseets/icons/6.svg"/>Gazlı İçecek</a>
        </nav>
    </section>

    <section class="main-section-cart-container">

      <section class="triple-cart-section">
        <div class="cart-container">
          <div class="first-cart">
            <h2>Özel Lezzetus</h2>
            <p>Acı Burger</p>
            <button onClick={handleClick}>SİPARİŞ VER</button>
          </div>
  
          <div class="second-row">
            <div class="second-cart">
              <h2>Hackathlon Burger Menü</h2>
              <button onClick={handleClick}>SİPARİŞ VER</button>
            </div>
            <div class="third-cart">
              <h2> <span class="red-word">Çoooook</span> hızlı npm gibi kurye</h2>
              <button onClick={handleClick}>SİPARİŞ VER</button>
            </div>
          </div>
        </div>
      </section>
      
    

      <section class="ara-metin-container">
        <div class="ara-metin">
          <a href="">en çok paketlenen menüler</a>
          <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
        </div>
      </section>

      <section class="yiyecekler-section">
        <div class="yiyecekler-container">
          <nav>
            <a href=""><img src="./Assets/Iteration-2-aseets/icons/1.svg"/>Ramen</a>
            <a class="selected-page" href=""><img src="./Assets/Iteration-2-aseets/icons/2.svg"/>Pizza</a>
            <a href=""><img src="./Assets/Iteration-2-aseets/icons/3.svg"/>Burger</a>
            <a href=""><img src="./Assets/Iteration-2-aseets/icons/4.svg"/>French fries</a>
            <a href=""><img src="./Assets/Iteration-2-aseets/icons/5.svg"/>Fast food</a>
            <a href=""><img src="./Assets/Iteration-2-aseets/icons/6.svg"/>Soft drinks</a>
          </nav>

        </div>
      </section>
  

      <section class="menu-section">
        <div class="menu-container">

          <div class="terminal-pizza">
            <img src="./Assets/Iteration-2-aseets/pictures/food-1.png"/>
            <h3>Terminal Pizza</h3>
            <div class="menu-paragraflari">
              <p class="yemek-puani">4.9</p>
              <p class="yorumlar">(200)</p>
              <p class="fiyat">60₺</p>
            </div>
          </div>  

          <div class="aci-pizza">
            <img src="./Assets/Iteration-2-aseets/pictures/food-2.png"/>
            <h3>Acı Pizza</h3>
            <div class="menu-paragraflari">
              <p class="yemek-puani">4.9</p>
              <p class="yorumlar">(200)</p>
              <p class="fiyat">60₺</p>
            </div>
          </div>

          <div class="tavuklu-burger">
            <img src="./Assets/Iteration-2-aseets/pictures/food-3.png"/>
            <h3>Tavuklu Burger</h3>
            <div class="menu-paragraflari">
              <p class="yemek-puani">4.9</p>
              <p class="yorumlar">(200)</p>
              <p class="fiyat">60₺</p>
            </div>
          </div>  

        </div>
      </section>
    
    </section>

    <footer>
      <div class="footer-top">
      
          <div class="first-order">
            <h3>Teknolojik Yemekler</h3>
            <ul class="contact">
              <li><img src="./Assets/Iteration-2-aseets/footer/icons/icon-1.png"/>341 Londonderry Road, Istanbul Türkiye</li>
              <li><img src="./Assets/Iteration-2-aseets/footer/icons/icon-2.png"/>aciktim@teknolojikyemekler.com</li>
              <li><img src="./Assets/Iteration-2-aseets/footer/icons/icon-3.png"/>+90 216 123 45 67</li>
            </ul>
          </div>
          <div class="second-order">
            <h4>Hot Menu</h4>
            <ul>
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Acı Burger</li>
            </ul>
          </div>
        
        <div class="footer-right">
          <h4>Instagram</h4>
          <ul class="instagram">
            <li><img src="./Assets/Iteration-2-aseets/footer/insta/li-0.png"/></li>
            <li><img src="./Assets/Iteration-2-aseets/footer/insta/li-1.png"/></li>
            <li><img src="./Assets/Iteration-2-aseets/footer/insta/li-2.png"/></li>
            <li><img src="./Assets/Iteration-2-aseets/footer/insta/li-3.png"/></li>
            <li><img src="./Assets/Iteration-2-aseets/footer/insta/li-4.png"/></li>
            <li><img src="./Assets/Iteration-2-aseets/footer/insta/li-5.png"/></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="bottom-content">
          <p>© 2023 Teknolojik Yemekler.</p>
          <img src="https://www.pikpng.com/pngl/b/53-530147_free-png-download-twitter-logo-grau-png-images.png"/>
        </div>
      </div>
  
    </footer>



      </div>   
    )
}

export default Anasayfa; 