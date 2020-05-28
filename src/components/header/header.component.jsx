import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

import { auth } from '../../Firebase/firebase.utils';

class Header extends Component {
    state = {
      isOpen: false
     
    };
    
    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }
    
    render() {
      return (
        <Router>
          <MDBNavbar color="indigo" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">Navbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                    <MDBNavLink to="#about">About Us</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="#testimonials">Testimonials</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="upcoming-events">Upcoming Events</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2">
                        <MDBIcon icon="user-alt" />
                      </span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">Login</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Signup</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
        );
      }
    }
    
    export default Header;