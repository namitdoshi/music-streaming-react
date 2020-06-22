import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import './carousel.styles.scss'


const items = [
  {
    src: require('../../assets/img/slide.png'),
    altText: 'Slide 1',
    // caption: 'Slide 1',
    // header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: require('../../assets/img/bg2.png'),
    altText: 'Slide 2',
  //  caption: 'Slide 2',
  //  header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: require('../../assets/img/bg3.png'),
    altText: 'Slide 3',
    // caption: 'Slide 3',
    // header: 'Slide 3 Header',
    key: '3'
  }
];

const CarouselComponent = () => <UncontrolledCarousel items={items} controls={false} />;

export default CarouselComponent;