import React, { Component } from 'react';


class Contacts extends Component {
  state = {
    pageName: 'Contacts'
  }
  render() {
    return (
      <div className="container content">
        <h1 className="text--center heading">{this.state.pageName}</h1>
      </div>
    );
  }
}

export default Contacts;
