import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

function Anasayfa() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/form'); 
  };

    return (
      <div className='home-container'>
        <div className='slogan-container'>
          <h1 className='baslik'>Teknolojik Yemekler</h1>
          <p className='slogan'>KOD ACIKTIRIR, PİZZA DOYURUR</p>
          <button className='aciktim-button' onClick={handleClick}>ACIKTIM</button>
        </div>
      </div>   
    )
}

export default Anasayfa; 