import React, { useState } from 'react';

import { auth } from '../../Firebase/firebase.utils'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  
} from 'reactstrap';

const Header = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Music Stream</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Events</NavLink>
            </NavItem>
          </Nav>
         
          {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
      ) : (
        <NavLink style={{paddingLeft: '6px'}}>
          <a style={{color: '#fff'}} href="/signin">Sign In</a>  
        </NavLink>
      )}
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;