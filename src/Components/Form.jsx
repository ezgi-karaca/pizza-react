import React from "react";
import BoyutSecimi from "./BoyutSecimi";
import HamurSecimi from "./HamurSecimi";
import Pizza from "./Pizza";
import EkMalzemeler from "./EkMalzemeler";

const malzemeListesi = ["Pepperoni","Sosis","Kanada Jambonu","Tavuk Izgara","Soğan","Domates","Mısır","Sucuk","Jalepeno","Sarımsak","Biber","Sucuk","Ananas","Kabak"]

function FormSayfasi() {
  
  return (
    <>
    <div className="form-container">
      <Pizza/>

      <div className="pizza-size">
        <BoyutSecimi/>
        <HamurSecimi/>
      </div>
      
      <EkMalzemeler/>  
     
    </div>
    </>
  )
}
export default FormSayfasi;