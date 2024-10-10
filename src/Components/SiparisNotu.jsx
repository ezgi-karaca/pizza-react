import React from "react";
import '../csssheets/SiparisNotu.css'

function SiparisNotu() {
  return (
    <div className="siparis-notu">
      <div className="siparis">
      <h3>Sipariş Notu</h3>
      <label>
      <textarea className="text-area" placeholder="Siparişine eklemek istediğin bir not var mı?" />
      </label>
      </div>
    </div>
  )
}

export default SiparisNotu;