import React from "react";

function BoyutSecimi(){
  return (
    <form>
      <h3>Boyut Seç</h3>
      <label for='kucuk'><input type="radio" id="kucuk"/> Küçük Boy</label> 
      <label for='orta'><input type="radio" id="orta"/>Orta Boy</label>
      <label for='buyuk'><input type="radio" id="buyuk"/> Büyük Boy</label>   
    </form>
  )
}
export default BoyutSecimi;