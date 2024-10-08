import React, { useState } from "react";

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


function MalzemeSecimi() {
 
 

  return (
    <div>
      <h3>Ek Malzemeler</h3>
      <form>
        {ekMalzemeler.map((malzeme)=>{
          return <label><input type="checkbox" value={malzeme}/>{malzeme}</label>})}
      </form> 
    </div>
  )

}

export default MalzemeSecimi;