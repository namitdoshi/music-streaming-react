import React from 'react'
import './about-us.styles.scss';


import laptopGuitar from '../../assets/img/laptop-guitar.png'
const AboutUs = ( ) => (
  <div className = 'about-us' id='about-us'>
    <h1 className = 'about-us-heading'>About us</h1>
    <div className='row'>
      <div className='col-12 col-sm-12 col-md-6 col-xl-6'>
        <img src= {laptopGuitar} alt="man with guitar and laptop"/>
      </div>
      <div className='col-12 col-sm-12 col-md-6 col-xl-6 about-us-text'>
        <h2>Art Live is a profit sharing platform developed by the team of engineers and musicians which aims to provie a source of income
          through digital solution for performing artists. Art Live Provides a platform for paid gigs/performances.
          
        </h2>
      </div>
    </div>  
  </div>
);

 
export default AboutUs;