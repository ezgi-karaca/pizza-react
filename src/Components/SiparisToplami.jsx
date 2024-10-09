import React, {useState} from 'react';

function SiparisToplami({ selectedToppings, pizzaFiyati }) {
 

  const toppingFiyatiHesapla = () => {
    return selectedToppings.length*5;
  }

  const toplamFiyatiHesapla = () => {
    return pizzaFiyati + (selectedToppings.length*5);
  }

  return (
    <div>
      <h3>Sipariş Toplamı</h3>
      
      <div>
        <h4>Seçimler</h4>
        <p>{toppingFiyatiHesapla()}₺</p>
      </div>
      <div>
        <h4>Toplam</h4>
        <p>{toplamFiyatiHesapla()}₺</p>
      </div>
    </div>
  )
}

export default SiparisToplami;