import './app.styles.scss';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserDocument } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribe = null;
  componentDidMount(){
    this.unsubscribe = auth.onAuthStateChanged( async userAuth => {
        this.setState({
          currentUser: userAuth
        })          
        //createUserDocument(userAuth);
        if(userAuth) {
          const userRef = await createUserDocument(userAuth);
          userRef.onSnapshot( snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              },
            }, () =>{
              console.log(this.state)
            })
          })
        }
        else{
          this.setState({ currentUser: null })
        }
    })
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    return (
      <div> 
          <HeaderComponent currentUser={this.state.currentUser}/>     
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signIn' component={SignInUp}/>
          </Switch>
      </div>
    );
  }  
}
export default App;
