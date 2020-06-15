import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import google from '../../assets/img/google3.png'
import {auth,signInWithGoogle} from '../../Firebase/firebase.utils'

import {Link} from 'react-router-dom'

class SignIn extends React.Component{
  constructor(props){
    super(props) ;
    this.state = {
      email : '',
      password : '',
      
    }
  }
  handleSubmit = async event => {
    event.preventDefault();

    const {email, password } = this.state;

    try{
      await auth.signInWithEmailAndPassword(email ,password);
      this.setState({email: '' , password :''})
    }
    catch (error){
      alert('problem in signing in')
    }
      
  }

  handleReset = event => {
    event.preventDefault();


    if(this.state.email === ''){
      alert('Please enter email')
    }

    else{
     auth.sendPasswordResetEmail(this.state.email).then(function() {
        // Email sent.
        alert('Please check your email and verify')
       
      }).catch(function(error) {
        // An error happened.
        alert('error')
      });

      
    }

  }

  handleChange = event =>{
    const {value,name} =  event.target;

    this.setState({ [name]: value });

    console.log(this.state)
  }
  render(){
    return(
      <div className = 'sign-in'>
        <h2>Already have an account</h2>
        <span>Sign in with your email and password!</span>

        <form onSubmit = {this.handleSubmit}>
          <FormInput name = 'email' value = {this.state.email} label = 'email' handleChange = {this.handleChange} type="email" required/>
          
          <FormInput name = 'password' value = {this.state.password} type="password"  label = 'password' handleChange = {this.handleChange}/>
          <a href ="#" onClick = {this.handleReset} >Click here to reset password</a>

          <div className = 'buttons'>
          < CustomButton type="submit">Sign in</CustomButton>
          < CustomButton onClick ={signInWithGoogle} className= 'isGoogleSignIn'> <img src = {google} alt = " Sign in With Google"></img> </ CustomButton>
          </div>
        </form>
      </div>
    );
  }

}
export default SignIn;
