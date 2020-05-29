import React from "react";

import Home from '../../components/home/home.component';
import AboutUs from '../../components/About-us/About-us.component'
import Inspiration from '../../components/inspiration-section/inspiration-section.component'

const HomePage = () => (
  <div className='homepage'>
    <Home/>
    <AboutUs/>
    <Inspiration/>
  </div>
);


export default HomePage;