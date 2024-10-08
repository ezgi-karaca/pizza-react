import React from 'react';
import './Home.css';

function Anasayfa() {
    return (
      <div className='home-container'>
        <div className='slogan-container'>
          <h1 className='baslik'>Teknolojik Yemekler</h1>
          <p className='slogan'>KOD ACIKTIRIR, PİZZA DOYURUR</p>
          <button className='aciktim-button'>ACIKTIM</button>
        </div>
      </div>   
    )
}

export default Anasayfa; 