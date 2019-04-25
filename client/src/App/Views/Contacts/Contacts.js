import React, { Component } from "react";
import GitCard from "../../components/Cards/GitCard/GitCard";
import TwitterCard from "../../components/Cards/TwitterCard/TwitterCard";

class Contacts extends Component {
  state = {
    pageName: "Contacts"
  };

  componentDidMount() {
    this.props.pageSwitchHandler(this.state.pageName);
  }

  render() {
    return (
      <>
        <GitCard user='Snailsloth' />
        <TwitterCard user='SnailslothPug' />
        <div className='liveCard'>
          <img src='assets/icons/paperairplane-grad.svg' alt='' />
          <div className='liveCard-Info'>
            <p>
              T.me:{" "}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://t.me/Snailsloth'
              >
                @Snailsloth
              </a>{" "}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Contacts;
