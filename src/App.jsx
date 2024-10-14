import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Anasayfa from './Anasayfa.jsx';
import FormSayfasi from './Components/FormSayfasi.jsx';
import SiparisOzeti from './Components/SiparisOzeti.jsx';
import './csssheets/App.css'

function App() {
  const [orderDetails, setOrderDetails] = useState(null);
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Anasayfa} />
        <Route 
          path="/form" 
          render={(props) => <FormSayfasi {...props} setOrderDetails={setOrderDetails} />} 
        />
        <Route 
          path="/sonuc" 
          render={(props) => <SiparisOzeti {...props} orderDetails={orderDetails} />} 
        />
      </Switch>
    </Router>
  )
}

export default App;
