import React from 'react'
import './about-us.styles.scss';
import Guruji from '../../assets/Guruji.jpeg'
const AboutUs = ( ) => (
    <div className = 'about-us'>
      <h3 classname = 'about-us-heading'>About us</h3>
      <span className = 'about-us-span'>
         <p className = 'about-us-content'> 
                We are the team of musicians and software developers with blessings of our beloved Guruji looking forward to bring a change
                in the form of live musical concerts.We are trying to give a platform to musicians as well as organizers to perform live 
                and organize concerts respectievly on our platform and get income through live concerts.
         </p>
      </span>

      <span className = 'our-inspiration'>
          <h3 className = 'our-inspiration-heading'> Our Inspiration</h3>
          <img className = 'inspiration-image'src= {Guruji} alt="Inspiration"/>
          <span>
              <p className = 'our-inspiration-content'>
                    Our beloved Guruji <b>Pandit Ulhas Rajhans</b> inspired us to create a platform to help musicians during the tough time faced by
                    musicians due to sudden stopage of all concerts activities due to COVID-19. Pandit Ulhas Rajhans himself is great musician and
                    an innovater who supported us to successfully create this paltform for all beloved musicians.
    
              </p>
          </span>
      </span>

        
    </div>
);

 
export default AboutUs;