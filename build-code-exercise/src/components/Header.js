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
import * as routes from '../routes';

const Header = ({ isLoggedIn, username }) => {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <header>
      <Navbar color='dark' dark expand='md'>
        <NavbarBrand tag={NavLink} to={routes.HOME}>
          <img className='mr-2' src={buildLogo} alt='Hellobuild Logo' />
          <span className='text-sm'>Hello Build</span>
        </NavbarBrand>
        <NavbarToggler onClick={() => setNavOpen(!isNavOpen)} />
        <Collapse isOpen={isNavOpen} navbar>
          <Nav className='ml-auto' navbar>
            {isLoggedIn && (
              <NavItem>
                <NavLink
                  exact
                  className='nav-link'
                  activeClassName='active'
                  to={routes.CALENDAR}
                >
                  Calendar
                </NavLink>
              </NavItem>
            )}
            {isLoggedIn && (
              <NavItem>
                <NavLink
                  exact
                  className='nav-link'
                  activeClassName='active'
                  to={routes.REPOS}
                >
                  Repositories
                </NavLink>
              </NavItem>
            )}
            {isLoggedIn && (
              <NavItem>
                <NavLink
                  exact
                  className='nav-link'
                  activeClassName='active'
                  to={routes.HOME}
                >
                  <span className='capitalize'>{username}</span>
                </NavLink>
              </NavItem>
            )}
            {!isLoggedIn && (
              <NavItem>
                <NavLink
                  exact
                  className='nav-link'
                  activeClassName='active'
                  to={routes.SIGNUP}
                >
                  Sign Up
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
