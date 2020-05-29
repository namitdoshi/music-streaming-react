import React from 'react'

import "./inspiration-section.styles.scss";
import guruji from '../../assets/img/guruji3.jpeg'

const Inspiration = ( ) => (
  <div className = 'inspiration' id='inspiration'>
    <div className='container-fluid'>
    <h1 classname = 'inspiration-heading'>Our Inspiration</h1>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-6 col-xl-6 guruji'>
          <img src= {guruji} alt="image of Pandit Ulhas Rajhans"/>
        </div>
        <div className='col-12 col-sm-12 col-md-6 col-xl-6 inspiration-text'>
          <h2>Our beloved Guruji <b>Pandit Ulhas Rajhans</b> inspired us to create a platform to help musicians during the tough time faced by
          musicians due to sudden stopage of all concerts activities due to COVID-19. Pandit Ulhas Rajhans himself is great musician and
          an innovater who supported us to successfully create this paltform for all beloved musicians.</h2>
        </div>
      </div>
    </div>
  </div>

)

export default Inspiration