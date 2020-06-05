import React from "react";
import './home-page.styles.scss'
import Home from '../../components/home/home.component';
import AboutUs from '../../components/About-us/About-us.component'
import Inspiration from '../../components/inspiration-section/inspiration-section.component'

const HomePage = () => (
  <div className='container-fluid'>
    <Home/>
    <AboutUs/>
    <Inspiration/>
  </div>
);


export default HomePage;