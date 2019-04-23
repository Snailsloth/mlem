import React, { Component } from "react";

import Terminal from "../../components/Terminal/Terminal";

class Home extends Component {
  state = {
    pageName: "Homepage"
  };
  render() {
    return (
      <div className='container content'>
        <h1 className='text--center heading neonFontHeader--glowing'>
          {this.state.pageName}
        </h1>
        <Terminal headerTitle='Hello world' />
      </div>
    );
  }
}

export default Home;
