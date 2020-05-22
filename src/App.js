import './app.styles.scss';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserDocument } from './firebase/firebase.utils';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';


class App extends React.Component{
 
  unsubscribe = null;

  componentDidMount(){
    const {setCurrentUser}  = this.props;
    this.unsubscribe = auth.onAuthStateChanged( async userAuth => {

      if(userAuth) {
        const userRef = await createUserDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })            
        })
      }
      else{
        setCurrentUser(null)
      }
    })
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    return (
      <div> 
          <HeaderComponent />     
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route 
              exact 
              path='/signIn'
              component={SignInUp}
              // render={() => 
              //   this.props.currentUser ? (
              //       <Redirect to='/' />
              //     ) : (
              //       <SignInUp/>
              //     )
              // }
              />
          </Switch>
      </div>
    );
  }  
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps , mapDispatchToProps)(App);
