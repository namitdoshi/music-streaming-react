import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = () => {
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
          <NavLink>
            <span style={{color: '#fff'}}>Sign In</span>  
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;