import React, { Component } from "react";
import "../Card.scss";
import gitLogo from "./Octicons-mark-github2.svg";

class GitCard extends Component {
  constructor() {
    super();
    this.state = {
      name: ``,
      avatar: ``,
      url: ``
    };
  }
  //https://stackoverflow.com/questions/21869795/github-api-retrieve-user-commits
  componentDidMount() {
    fetch(`http://localhost:5000/git/${this.props.user}`)
      .then(results => {
        return results.json();
        // console.log(results.json())
      })
      .then(data => {
        this.setState({
          name: data.login,
          avatar: data.avatar_url,
          url: data.html_url
        });
      });
  }

  render() {
    const gitDefault = (
      <div className='liveCard'>
        <img className='svgMask--git' src={gitLogo} alt='Git icon' />
        <div className='liveCardInfo'>
          <p>Github username</p>
        </div>
      </div>
    );

    const gitSuccess = (
      <div className='liveCard'>
        <img className='svgMask--git' src={gitLogo} alt={this.state.name} />

        <div className='liveCard-Info'>
          <p>
            Github:{" "}
            <a target='_blank' rel='noopener noreferrer' href={this.state.url}>
              {this.state.name}
            </a>{" "}
          </p>

          <p>
            Last commit in this project: <br />
            <span>#soon </span>
          </p>
        </div>
      </div>
    );

    return this.state.name.length > 0 ? gitSuccess : gitDefault;
  }
}

export default GitCard;
