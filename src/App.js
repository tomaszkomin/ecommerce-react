import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './app.styles.scss';
import { Switch, Route } from 'react-router-dom';
import HeaderComponent from './components/header/header.component';
function App() {
  return (
    <div> 
        <HeaderComponent/>     
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
        </Switch>
    </div>
  );
}
export default App;
