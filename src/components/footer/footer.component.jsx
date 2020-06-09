import React from 'react';

import './footer.styles.scss';


const Footer = ( ) => (
 
<footer className="page-footer font-small pt-4 footer-start">

  <div className="container-fluid text-center text-md-left">    
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3 no-gutters">
        
        <h5 className="text-uppercase text-1">Art live</h5>
        <p className='text-2'>Always at your service</p>
      </div>

      <hr className="clearfix w-100 d-md-none pb-3" />
      
      <div className="col-md-3 mb-md-0 mb-3">

        <h5 className="text-uppercase text-1">Links</h5>

        <ul className="list-unstyled">
          <li>
            <a href="./event">Events</a>
          </li>
          <li>
            <a href="./contact">Contact Us</a>
          </li>
          <li>
            <a href="./signin">Login/Sign up</a>
          </li>
        </ul>

      </div>
            
      <div className="col-md-3 mb-md-0 mb-3">

        <h5 className="text-uppercase text-1">Legal</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Terms and Conditions</a>
          </li>
          <li>
            <a href="#!">Privacy Policy</a>
          </li>
          <li>
            <a href="#!">Refund Policy</a>
          </li>
        </ul>

      </div>
    </div>
  </div>

  <div className="footer-copyright text-center py-3 footer-end text-1">
    © 2020 Copyright: Art Live
  </div>


</footer>

)

export default Footer
