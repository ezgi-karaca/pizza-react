import React from "react";
import BoyutSecimi from "./BoyutSecimi";
import HamurSecimi from "./HamurSecimi";
import Pizza from "./Pizza";
import MalzemeSecimi from "./MalzemeSecimi";


function FormSayfasi() {
  
  return (
    <div>
      <div className="form-container">
        <Pizza/>

        <div className="pizza-size">
          <BoyutSecimi/>
          <HamurSecimi/>
        </div>

        <MalzemeSecimi/>
      
      </div>
    </div>
  )
}

export default FormSayfasi;