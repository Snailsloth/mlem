import React, { Component } from 'react';
import GitCard from '../../components/Cards/GitCard/GitCard'
import TwitterCard from '../../components/Cards/TwitterCard/TwitterCard'

class Contacts extends Component {
  state = {
    pageName: 'Contacts'
  }
  render() {
    return (
      <div className="container content">
        <h1 className="text--center heading">{this.state.pageName}</h1>
        <div className="shadow-wrapper">
          <GitCard user="Snailsloth"/>
          <TwitterCard user="SnailslothPug"/>
          <div className="liveCard">
            <img src="assets/icons/telegram.svg" alt=""/>
            <div className="liveCard-Info">
              <p>T.me: <a target="_blank" rel="noopener noreferrer" href="https://t.me/Snailsloth">@Snailsloth</a> </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
