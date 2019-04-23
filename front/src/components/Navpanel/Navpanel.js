import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navpanel.scss";

class Navpanel extends Component {
  render() {
    return (
      <>
        <img src='/assets/logo_v2_white.png' alt='' className='header-Logo' />
        <nav role='navigation' aria-label='Main navigation'>
          <p className='neonFont'>
            Go <span>t</span>o:
          </p>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink exact to='/contacts'>
            Contacts
          </NavLink>
        </nav>
      </>
    );
  }
}

export default Navpanel;
