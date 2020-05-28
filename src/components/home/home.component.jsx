import React from 'react';

import './home.styles.scss';

import Homeimage from "../../assets/img/62236-removebg-preview.png";

const Home = ( ) => (
  <div className = 'home'>
    <div className='home-heading'>
      <h1>Your own Home Concert!</h1>
    </div>
    <div className='home-img'>
      <img src= {Homeimage} alt="man with guitar"/>
    </div>
  </div>
);

export default Home;