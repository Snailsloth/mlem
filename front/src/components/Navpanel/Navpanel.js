import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import './Navpanel.scss'

class Navpanel extends Component {
  render() {
    return (


          <nav role="navigation" aria-label="Main navigation">
            <NavLink to="/">/</NavLink>
            <NavLink to="/contacts">contacts</NavLink>
          </nav>


    );
  }
}

export default Navpanel;
