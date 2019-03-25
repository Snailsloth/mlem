import React, { Component } from 'react';
import style from '../Card.scss'
import gitLogo from './Octicons-mark-github.svg'

class GitCard extends Component {
  constructor(){
    super();
    this.state = {
      name: ``,
      avatar: ``,
      url: ``
    }
  }

  componentDidMount(){
    fetch(`http://localhost:5000/git/${this.props.user}`)
    .then(results => {
      return results.json()
      // console.log(results.json())
    }).then(data => {
      this.setState({
          name: data.login,
          avatar: data.avatar_url,
          url: data.html_url
      })
    })
  }

  render() {

    const gitDefault = (
      <div className="footerCard">
        <img className="svgMask--git" src={gitLogo} alt="Git icon"/>

        <div className="footerIconInfo">
          <a href="/">Github username</a>
        </div>
      </div>
    )


    const gitSuccess = (
      <div className="footerCard">
        <img className="svgMask--git" src={this.state.avatar} alt={this.state.name}/>

        <div className="footerCard-Info">
          <a target="_blank"  className="text--center" href={this.state.url}>{this.state.name}</a>
          <p>Last commit in project: <br/>
            <span>#soon </span>
          </p>
        </div>
      </div>
    )


    return (

        (this.state.name.length > 0) ? gitSuccess : gitDefault

    );
  }
}

export default GitCard;
