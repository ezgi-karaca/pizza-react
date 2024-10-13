import React, {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from 'axios';
import '../csssheets/FormSayfasi.css'


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

function FormSayfasi() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const orderData = {
      count,
      selectedToppings,
      totalPrice: toplamFiyatiHesapla()
    };

    axios.post('https://reqres.in/api/pizza', orderData)
    .then(response => {
      console.log('Sipariş Özeti:', orderData);
      console.log('API Yanıtı:', response.data); 
      history.push('/sonuc'); 
    })
    .catch(error => {
      console.error('API isteği sırasında bir hata oluştu:', error);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.'); 
    });
  };
 
  const [formValid, setFormValid] = useState(false);
  const validateForm = () => {
    const isSizeSelected = document.querySelector('input[name="boyut"]:checked');
    const isDoughSelected = document.querySelector('select').value !== "hamur-kalinlik";
    setFormValid(isSizeSelected && isDoughSelected);
  };

  const pizzaFiyati = 85.50;
  const [selectedToppings, setSelectedToppings] = useState([]);


  const boyutlar = [
    { id: "kucuk", label: "S" },
    { id: "orta", label: "M" },
    { id: "buyuk", label: "L" }
  ];

  const hamurKalinliklari = [
    { value: "hamur-kalinlik", label: "--Hamur Kalınlığı Seç--", disabled: true },
    { value: "ince", label: "İnce" },
    { value: "kalin", label: "Kalın" }
  ];
  
  

  const handleToppings = (topping, isChecked) => {
    if (isChecked) {
      
      if (selectedToppings.length < 10) {
        setSelectedToppings(prev => [...prev, topping]);
      } else {
        alert("En fazla 10 malzeme seçebilirsiniz.");
      }
    } else {
     
      setSelectedToppings(prev => prev.filter(t => t !== topping));
    }
  };
  
  const handleChange = (e) => {
    const topping = e.target.value;
    const isChecked = e.target.checked;

    handleToppings(topping, isChecked);
  }

  const [count,setCount] = useState(1);

  const arti = () => {
    setCount(count+1)
  }

  const eksi = () => {
    if (count > 1) {setCount(count-1)}
  }

  const toppingFiyatiHesapla = () => {
    return selectedToppings.length*5;
  }

  const toplamFiyatiHesapla = () => {
    return pizzaFiyati + (selectedToppings.length*5);
  }
   


  
  return (
    <div>
      <div className="header">
        <div className="header-text">
          <h1 className='baslik'>Teknolojik Yemekler</h1>

        </div>
        
      </div>

      <div className="pizza">
        <div className="pizza-container">
          <img src="./Assets/Iteration-2-aseets/pictures/form-banner.png"/>
          <p className="yazi">Anasayfa - <span className="span">Sipariş Oluştur</span></p>
          <h3>Position Absolute Acı Pizza</h3>
          <div className="menu-paragraflari">
            <p className="fiyat">85.50₺</p>
            <p className="yemek-puani">4.9</p>
            <p className="yorumlar">(200)</p>        
          </div>
          <p className="aciklama">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
        </div>
      </div>

      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          

          <div className="pizza-size">
            

            <div className="boyut-secimi">
              <div className="boyut-container">
              <div className="boyut-form">
                <h3>Boyut Seç <span className="star">*</span></h3>
                <div className="boyut-labels">
                  {boyutlar.map((boyut) => (
                    <label key={boyut.id} htmlFor={boyut.id}>
                      <input type="radio" id={boyut.id} name="boyut" onChange={validateForm} /> {boyut.label}
                    </label>
                  ))}   
                </div>
              </div>

              <div className="hamur-form">
              <h3>Hamur Seç <span className="star">*</span></h3>
              <select onChange={validateForm}>
                {hamurKalinliklari.map((hamur) => (
                <option key={hamur.value} value={hamur.value} disabled={hamur.disabled}>
                  {hamur.label}
                </option>
              ))}
              </select>
              </div>
              </div>
            </div>
            
          </div>


          <div className="malzeme-container">
            <div className="malzemeler">
            <h3>Ek Malzemeler</h3>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="checkbox">
              {ekMalzemeler.map((malzeme)=>{
                return <label key={malzeme}><input type="checkbox" value={malzeme} checked={selectedToppings.includes(malzeme)} onChange={handleChange}/> {malzeme}</label>})}
            </div> 
            </div>
          </div>

          <div className="siparis-notu">
            <div className="siparis">
            <h3>Sipariş Notu</h3>
            <label>
            <textarea className="text-area" placeholder="Siparişine eklemek istediğin bir not var mı?" />
            </label>
            </div>
          </div>

          <div className="hr">
            <hr/>
          </div>
         

          <div className="siparis-toplami">

            <div>
              <div className="counter-container">
                <button className="button" onClick={eksi}>-</button>
                <h3  className="count" >{count}</h3>
                <button className="button" onClick={arti}>+</button>
              </div>
            </div>

          

            <div className='toplam'>
              <h3>Sipariş Toplamı</h3>
              
              <div className='topping-fiyat'>
                <h4>Seçimler</h4>
                <p>{toppingFiyatiHesapla()}₺</p>
              </div>
              <div className='toplam-fiyat'>
                <h4>Toplam</h4>
                <p>{toplamFiyatiHesapla()}₺</p>
              </div>

              <button type="submit"  disabled={!formValid} >Sipariş Ver</button>
            </div>

          </div>
          
        
        </form>
      </div>
    </div>
  )
}

export default FormSayfasi;