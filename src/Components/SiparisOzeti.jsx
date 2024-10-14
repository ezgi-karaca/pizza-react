import React from 'react';
import '../csssheets/SiparisOzeti.css'

function SiparisOzeti({ orderDetails }) {

  const boyutMetinleri = {
    kucuk: 'S',
    orta: 'M',
    buyuk: 'L',
  };

  const hamurMetinleri = {
    ince: 'İnce',
    kalin: 'Kalın',
  };

  return (
    <div className='sonuc-sayfasi'>
      <div className='sonuc'>
        <h1 className='top'>Teknolojik Yemekler</h1>
        <div className='sonuc-text'>
          <p className='yolda'>lezzetin yolda</p>
          <p className='bildiri'>SİPARİŞ ALINDI</p>     
        </div>
      </div>

      <hr className='cizgi'/>

      <div className='siparis-container'>
        <div className='siparis-alt-container'>
          <h3 className='pizza-ismi'>Position Absolute Acı Pizza</h3>
          <div className='siparis-detay'>
            <p>Boyut: <span>{boyutMetinleri[orderDetails.size]}</span></p>
            <p>Hamur: <span>{hamurMetinleri[orderDetails.dough]}</span></p>
            <p>Ek Malzemeler: <span>{orderDetails.selectedToppings.join(', ')}</span></p>
          </div>
        </div>
      </div>

      <div className='total-siparis-container'>
        <div className='total-siparis'>
          <h3>Sipariş Toplamı</h3>
          
          <div className='secimler'>
            <h4>Seçimler</h4><p>{orderDetails.selectedToppings.length * 5}₺</p>
          
          </div>
          <div className='total'>
            <h4>Toplam</h4><p>{orderDetails.totalPrice}₺</p>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiparisOzeti;