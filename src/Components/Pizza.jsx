import React from "react";
import '../csssheets/Pizza.css'

function Pizza() {
  return (
    <div className="pizza">
      <div className="pizza-container">
        <img src="./Assets/Iteration-2-aseets/pictures/form-banner.png"/>
        <p className="yazi">Anasayfa - <span className="span">Sipariş Oluştur</span></p>
        <h3>Position Absolute Acı Pizza</h3>
        <div className="menu-paragraflari">
          <p className="fiyat">85.50₺</p>
          <p className="yemek-puani">4.9</p>
          <p className="yorumlar">(200)</p>        
        </div>
        <p className="aciklama">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
      </div>
    </div>
  )
}
export default Pizza;