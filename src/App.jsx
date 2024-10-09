import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Anasayfa from './Anasayfa';
import FormSayfasi from './Components/FormSayfasi.jsx';
import SiparisOzeti from './Components/SiparisTamamlandi.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Anasayfa} />
        <Route path="/form" component={FormSayfasi} />
        <Route path="/sonuc" component={SiparisOzeti} />
      </Switch>
    </Router>
  )
}

export default App;
