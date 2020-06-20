import React from 'react';

import './home.styles.scss';
import CarouselComponent from '../Carousel/carousel.component'


const Home = ( ) => (
  <div className = 'home'>
  <video autoPlay muted loop id="myVideo">
    <source src={Video} type="video/mp4" />
  </video>
    <div className='row'>
      <CarouselComponent/>    
      </div>
    </div>
  
);

export default Home;