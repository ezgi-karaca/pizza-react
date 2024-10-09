import React, {useState} from "react";
import BoyutSecimi from "./BoyutSecimi";
import Pizza from "./Pizza";
import MalzemeSecimi from "./MalzemeSecimi";
import SiparisNotu from "./SiparisNotu";
import Counter from "./Counter";
import SiparisToplami from "./SiparisToplami";
import '../csssheets/FormSayfasi.css'


function FormSayfasi() {
  const pizzaFiyati = 85.50;
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleToppings = (topping, isChecked) => {
    if (isChecked) {
      
      if (selectedToppings.length < 10) {
        setSelectedToppings(prev => [...prev, topping]);
      } else {
        alert("En fazla 10 malzeme seçebilirsiniz.");
      }
    } else {
     
      setSelectedToppings(prev => prev.filter(t => t !== topping));
    }
  };
  
  return (
    <div>
      <div className="header">
        <div className="header-text">
          <h1 className='baslik'>Teknolojik Yemekler</h1>
          <p className="text">Anasayfa - <span className="span">Sipariş Oluştur</span></p>
        </div>
        
      </div>
      <div className="form-container">
        <div className="form">
          <Pizza/>

          <div className="pizza-size">
            <BoyutSecimi/>
            
          </div>

          <MalzemeSecimi onToppingsChange={handleToppings} selectedToppings={selectedToppings}  />

          <SiparisNotu/>

          <hr/>

          <div>
          <Counter/>
          <SiparisToplami selectedToppings={selectedToppings} pizzaFiyati={pizzaFiyati} />
          </div>
          
        
        </div>
      </div>
    </div>
  )
}

export default FormSayfasi;