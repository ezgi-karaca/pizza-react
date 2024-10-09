import React, {useState} from "react";
import BoyutSecimi from "./BoyutSecimi";
import HamurSecimi from "./HamurSecimi";
import Pizza from "./Pizza";
import MalzemeSecimi from "./MalzemeSecimi";
import SiparisNotu from "./SiparisNotu";
import Counter from "./Counter";
import SiparisToplami from "./SiparisToplami";


function FormSayfasi() {
  const pizzaFiyati = 85.50;
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleToppings = (topping, isChecked) => {
    if (isChecked) {
      // Eğer kullanıcı yeni bir malzeme eklemeye çalışıyorsa
      if (selectedToppings.length < 10) {
        setSelectedToppings(prev => [...prev, topping]);
      } else {
        alert("En fazla 10 malzeme seçebilirsiniz.");
      }
    } else {
      // Malzeme kaldırılırsa
      setSelectedToppings(prev => prev.filter(t => t !== topping));
    }
  };
  
  return (
    <div>
      <div className="form-container">
        <Pizza/>

        <div className="pizza-size">
          <BoyutSecimi/>
          <HamurSecimi/>
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
  )
}

export default FormSayfasi;