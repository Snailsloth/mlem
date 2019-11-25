import React from "react";
import { NavLink } from "react-router-dom";
import "./Navpanel.scss";

const Navpanel = props => {
  return (
    <>
      <div className='header-Logo text--left'>
        <img src='/assets/logo_v2_white.png' alt='Site logo' />
      </div>

      <h1 className='heading pagename neonFontHeader--glowing text--center'>
        {props.activePage}
      </h1>
      <nav
        role='navigation'
        aria-label='Main navigation'
        className='text--right'
      >
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
};

export default Navpanel;
