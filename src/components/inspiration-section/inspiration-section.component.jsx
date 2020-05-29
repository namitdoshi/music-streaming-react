import React from 'react'

import "./inspiration-section.styles.scss";
import guruji from '../../assets/img/IMG-20200528-WA0011.jpg'

const Inspiration = ( ) => (
  <div className = 'inspiration' id='inspiration'>
    <h1 className = 'inspiration-heading'>Our Inspiration</h1>
    <div className='row'>
      <div className='col-12 col-sm-12 col-md-12 col-xl-12'>
        <img src= {guruji} alt="image of Pandit Ulhas Rajhans"/>
        <h2>Our beloved Guruji <strong>Pandit Ulhas Rajhans</strong> inspired us to create a platform to help musicians during the tough time faced by
        musicians due to sudden stopage of all concerts activities due to COVID-19. Pandit Ulhas Rajhans himself is great musician and
        an innovater who supported us to successfully create this paltform for all beloved musicians.</h2>
      </div>
    </div>
  </div>

)

export default Inspiration