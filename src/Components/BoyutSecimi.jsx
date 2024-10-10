import React from "react";
import '../csssheets/BoyutSecimi.css'

function BoyutSecimi(){
  return (
    <div className="boyut-secimi">
      <div className="boyut-container">
      <form className="boyut-form">
        <h3>Boyut Seç <span className="star">*</span></h3>
        <div className="boyut-labels">
          <label htmlFor='kucuk'><input type="radio" id="kucuk" name="boyut"/> S</label> 
          <label htmlFor='orta'><input type="radio" id="orta" name="boyut"/> M</label>
          <label htmlFor='buyuk'><input type="radio" id="buyuk" name="boyut"/> L</label>   
        </div>
      </form>

      <form className="hamur-form">
      <h3>Hamur Seç <span className="star">*</span></h3>
      <select>
        <option value="hamur-kalinlik"  disabled selected >--Hamur Kalınlığı Seç--</option>
        <option value="ince">İnce</option>
        <option value="kalin">Kalın</option>
      </select>
      </form>
      </div>
    </div>
  )
}



export default BoyutSecimi;