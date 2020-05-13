import './app.styles.scss';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
function App() {
  return (
    <div> 
        <HeaderComponent/>     
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signIn' component={SignInUp}/>
        </Switch>
    </div>
  );
}
export default App;
