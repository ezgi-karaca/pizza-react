import React, {useState} from 'react';
import MalzemeSecimi from './MalzemeSecimi';

function SiparisToplami() {
  const pizzaFiyati = 85.50;
  const [selectedToppings, setSelectedToppings] = useState([])

  const handleToppings = (e) => {
    const topping = e.target.value;
    setSelectedToppings(prev => prev.includes(topping) ? prev.filter(t => t !== topping) : [...prev, topping])
  }

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