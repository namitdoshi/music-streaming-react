import React from 'react';

import './home.styles.scss';

import Homeimage from "../../assets/img/62236-removebg-preview.png";
import Video from "../../assets/img/v.mp4";

const Home = ( ) => (
  <div className = 'home'>
  <video autoPlay muted loop id="myVideo">
    <source src={Video} type="video/mp4" />
  </video>
    <div className='row'>
      <div className='home-heading col-sm-12 col-md-6 col-xl-6'>
        sfdmsdklfkjsdkfjk sjkfjsdj jsdfkj sdkjfj skljsdlj lkjsl
      </div>
      <div className='home-img col-sm-12 col-md-6 col-xl-6'>
       
      </div>
    </div>
  </div>
);

export default Home;