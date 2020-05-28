import React from 'react';


import { auth,createUserProfileDocument } from './Firebase/firebase.utils';
import {Switch , Route} from 'react-router-dom';


import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-signup/sign-in-and-sign-up.component'
import './App.css';
import HomePage from './pages/home-page/home-page.component';
import EventDashboard from './pages/Event-dashboard/eventdashboard.component';

class App extends React.Component { 

  constructor(){
    super();

    this.state = {
      currentUser: null
    } 
  }
  unsuscribeFromAuth = null;


  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  } 
   
   componentWillUnmount(){
    this.unsuscribeFromAuth ();
    }
  
  render(){
    return (
        <div>
          <Header currentUser = {this.state.currentUser}/>
          <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route path = '/signin' component ={SignInAndSignUpPage} />
            <Route path = '/event' component ={EventDashboard} />
          </Switch>
        </div>
    );
  }
}

export default App;
