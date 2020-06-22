import React, { useState } from 'react';
import{ connect } from 'react-redux';

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
import './header.styles.scss';


const Header = ({currentUser}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Art Live</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href = "/" >Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href = "/#about-us" >About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href = "/event">Events</NavLink>
            </NavItem>
          </Nav>
         
          {currentUser ? (
          <div style={{color: '#fff', cursor: 'pointer'}} onClick={() => {
            auth.signOut()
            alert('You have been signed out!')
            window.location.href = '/'
          }}>
            Sign Out
          </div>
      ) : (
        <NavLink href = "/signin" className='signin-link'>
            <span style={{color: '#fff'}}>Sign In | Sign up</span>  
          </NavLink>
      )}
          
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);