import React from 'react';

import './home.styles.scss';
import CarouselComponent from '../Carousel/carousel.component'


const Home = ( ) => (
  <div className = 'home'>
    <div className='row'>
      <CarouselComponent/>
      </div>
    </div>
  
);

export default Home;