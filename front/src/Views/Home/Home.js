import React, { Component } from "react";

import Terminal from "../../components/Terminal/Terminal";

class Home extends Component {
  state = {
    pageName: "Homepage"
  };

  componentDidMount() {
    this.props.pageSwitchHandler(this.state.pageName);
  }

  render() {
    return (
      <div className='container content'>
        <Terminal headerTitle='Hello world' />
      </div>
    );
  }
}

export default Home;
