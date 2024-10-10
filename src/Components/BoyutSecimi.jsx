import React from "react";
import '../csssheets/BoyutSecimi.css'

function BoyutSecimi(){
  return (
    <div className="boyut-secimi">
      <div className="boyut-container">
      <form className="boyut-form">
        <h3>Boyut Seç <span className="star">*</span></h3>
        <label htmlFor='kucuk'><input type="radio" id="kucuk" name="boyut"/> Küçük</label> 
        <label htmlFor='orta'><input type="radio" id="orta" name="boyut"/> Orta</label>
        <label htmlFor='buyuk'><input type="radio" id="buyuk" name="boyut"/> Büyük</label>   
      </form>

      <form className="hamur-form">
      <h3>Hamur Seç <span className="star">*</span></h3>
      <select>
        <option value="hamur-kalinlik"  disabled selected >Hamur Kalınlığı</option>
        <option value="ince">İnce</option>
        <option value="kalin">Kalın</option>
      </select>
      </form>
      </div>
    </div>
  )
}



export default BoyutSecimi;