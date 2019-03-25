import React, { Component } from 'react';

import Terminal from '../../components/Terminal/Terminal'

class Home extends Component {
  state = {
    lang : ["en", "ru"]
  }
  render() {
    return (
      <div className="container content">
        <p>Homepage</p>
        <h1>{this.state.lang}</h1>
        <Terminal headerTitle="Hello world"/>

      </div>
    );
  }
}

export default Home;
