import React from "react";

function HamurSecimi() {
  return (
    <form>
      <h3>Hamur Seç</h3>
      <select>
        <option value="hamur-kalinlik" >Hamur Kalınlığı</option>
        <option value="ince">İnce</option>
        <option value="kalin">Kalın</option>
      </select>
    </form>
  )
}
export default HamurSecimi;