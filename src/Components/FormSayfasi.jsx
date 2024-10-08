import React from "react";
import BoyutSecimi from "./BoyutSecimi";
import HamurSecimi from "./HamurSecimi";
import Pizza from "./Pizza";
import MalzemeSecimi from "./MalzemeSecimi";
import SiparisNotu from "./SiparisNotu";
import Counter from "./Counter";
import SiparisToplami from "./SiparisToplami";


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

        <SiparisNotu/>

        <hr/>

        <div>
        <Counter/>
        <SiparisToplami/>
        </div>
        
      
      </div>
    </div>
  )
}

export default FormSayfasi;