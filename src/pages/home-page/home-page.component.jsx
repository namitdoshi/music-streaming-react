import React, { Component } from "react";

import Home from '../../components/home/home.component';
import AboutUs from '../../components/About-us/About-us.component'
const HomePage = () => (
  <div className='homepage'>
    <Home/>
    <AboutUs/>
  </div>
);


export default HomePage;