import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import './Navpanel.scss'

class Navpanel extends Component {
  render() {
    return (


          <nav role="navigation" aria-label="Main navigation">
            <span>Go to: </span>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/contacts">Contacts</NavLink>
          </nav>


    );
  }
}

export default Navpanel;
