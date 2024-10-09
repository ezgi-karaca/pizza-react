import React from "react";
import '../csssheets/MalzemeSecimi.css'

const  ekMalzemeler = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak"
];


function MalzemeSecimi({ onToppingsChange, selectedToppings }) {
  
  const handleChange = (e) => {
    const topping = e.target.value;
    const isChecked = e.target.checked;

    onToppingsChange(topping, isChecked);
  };
 
 

  return (
    <div className="malzeme-container">
      <h3>Ek Malzemeler</h3>
      <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      <form className="checkbox">
        {ekMalzemeler.map((malzeme)=>{
          return <label><input type="checkbox" value={malzeme} checked={selectedToppings.includes(malzeme)} onChange={handleChange}/> {malzeme}</label>})}
      </form> 
    </div>
  )

}

export default MalzemeSecimi;