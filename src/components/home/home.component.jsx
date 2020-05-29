import React from 'react';

import './home.styles.scss';

import Homeimage from "../../assets/img/62236-removebg-preview.png";

const Home = ( ) => (
  <div className = 'home'>
    <div className='row'>
      <div className='home-heading col-sm-12 col-md-6 col-xl-6'>
        <h1>Your own Home Concert!</h1>
      </div>
      <div className='home-img col-sm-12 col-md-6 col-xl-6'>
        <img src= {Homeimage} alt="man with guitar"/>
      </div>
    </div>
  </div>
);

export default Home;