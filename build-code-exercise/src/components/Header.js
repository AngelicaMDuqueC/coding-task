import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import buildLogo from '../assets/img/logo.png';

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <header>
      <Navbar color='dark' dark expand='md'>
        <NavbarBrand tag={NavLink} to='/'>
          <img className='mr-2' src={buildLogo} alt='Hellobuild Logo' />
          <span className='text-sm'>Hello Build</span>
        </NavbarBrand>
        <NavbarToggler onClick={() => setNavOpen(!isNavOpen)} />
        <Collapse isOpen={isNavOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink
                exact
                className='nav-link'
                activeClassName='active'
                to='/events'
              >
                Events
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                exact
                className='nav-link'
                activeClassName='active'
                to='/repositories'
              >
                Repositories
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                exact
                className='nav-link'
                activeClassName='active'
                to='/login'
              >
                Login
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
