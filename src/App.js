import React from 'react';


import { auth,createUserProfileDocument } from './Firebase/firebase.utils';
import {Switch , Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-signup/sign-in-and-sign-up.component'
import './App.css';
import HomePage from './pages/home-page/home-page.component';
import EventDashboard from './pages/Event-dashboard/eventdashboard.component';

class App extends React.Component { 

  
  unsuscribeFromAuth = null;


  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         
         setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
            })
        });
      }

      setCurrentUser(userAuth);
    });
  } 
   
   componentWillUnmount(){
    this.unsuscribeFromAuth ();
    }
  
  render(){
    return (
        <div>
          <Header/>
          <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route path = '/signin' component ={SignInAndSignUpPage} />
            <Route path = '/event' component ={EventDashboard} />
          </Switch>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
