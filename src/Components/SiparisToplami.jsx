import React from 'react';
import '../csssheets/SiparisToplami.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function SiparisToplami({ selectedToppings, pizzaFiyati }) {
  const history = useHistory();
  const handleClick = () => {
    history.push('/sonuc'); 
  };
 

  const toppingFiyatiHesapla = () => {
    return selectedToppings.length*5;
  }

  const toplamFiyatiHesapla = () => {
    return pizzaFiyati + (selectedToppings.length*5);
  }

  return (
    <div className='toplam'>
      <h3>Sipariş Toplamı</h3>
      
      <div className='topping-fiyat'>
        <h4>Seçimler</h4>
        <p>{toppingFiyatiHesapla()}₺</p>
      </div>
      <div className='toplam-fiyat'>
        <h4>Toplam</h4>
        <p>{toplamFiyatiHesapla()}₺</p>
      </div>

      <button onClick={handleClick}>Sipariş Ver</button>
    </div>
  )
}

export default SiparisToplami;