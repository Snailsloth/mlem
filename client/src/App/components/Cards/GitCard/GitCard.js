import React, { Component } from "react";
import "../Card.scss";
import gitLogo from "./Octicons-mark-github2.svg";

class GitCard extends Component {
  constructor() {
    super();
    this.state = {
      commit: {
        url: ""
      }
    };
  }
  componentDidMount() {
    fetch(`https://mlemmlem.ml/git/${this.props.user}/${this.props.repo}`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          commit: data
        });
      });
  }

  render() {
    const gitSuccess = (
      <div className='liveCard'>
        <img className='svgMask--git' src={gitLogo} alt='Git Icon' />

        <div className='liveCard-Info'>
          <p>
            Last commit on
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`https://github.com/${this.props.user}/${this.props.repo}`}
            >
              {" "}
              this{" "}
            </a>
            project:
            <br />
            &laquo;
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={this.state.commit.url}
            >
              {this.state.commit.message}
            </a>
            &raquo;
          </p>
        </div>
      </div>
    );
    return gitSuccess;
  }
}

export default GitCard;
