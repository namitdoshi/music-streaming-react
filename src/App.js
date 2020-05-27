import React from 'react';


import { auth,createUserProfileDocument } from './Firebase/firebase.utils';
import {Switch , Route} from 'react-router-dom';


import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-signup/sign-in-and-sign-up.component'
import './App.css';
import { render } from 'react-dom';
import HomePage from './pages/home-page/home-page.component';

class App extends React.Component {
  
  render(){
    return (
        <div>
          <Header/>
          <Switch>
            <Route exact path = '/' component = {HomePage}/>
            <Route path = '/signin' component ={SignInAndSignUpPage} />
          </Switch>
        </div>
    );
  }
}

export default App;
