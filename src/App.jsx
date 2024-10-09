import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Anasayfa from './Anasayfa';
import FormSayfasi from './Components/FormSayfasi.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Anasayfa} />
        <Route path="/form" component={FormSayfasi} />
      </Switch>
    </Router>
  )
}

export default App;
