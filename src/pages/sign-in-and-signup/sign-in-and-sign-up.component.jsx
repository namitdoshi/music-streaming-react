import React from 'react';

import SignIn from '../../components/signin/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <div className='container' style={{padding: 0}}>
      <div className='row no-gutters'>
        <div className='col-12 col-sm-12 col-md-6 col-xl-6'><SignIn /></div>
        <div className='col-12 col-sm-12 col-md-6 col-xl-6' className='signup'><SignUp/></div>
      </div>
    </div>
  </div>
);

export default SignInAndSignUpPage;