import React from "react";


import Home from '../../components/home/home.component';
import AboutUs from '../../components/About-us/About-us.component'
import Inspiration from '../../components/inspiration-section/inspiration-section.component'
import Footer from '../../components/footer/footer.component'

const HomePage = () => (
  <div>
    <Home/>
    <div className='container-fluid'>
      <AboutUs/>
      <Inspiration/>
    </div>
    <Footer/>
  </div>

);


export default HomePage;