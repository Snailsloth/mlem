import React, { Component } from 'react';
import style from '../Card.scss'
// import gitLogo from './Octicons-mark-github.svg'

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
    return (


        <div>
          <img className="svgMask--git" src={this.state.avatar} alt={this.state.name}/>

          <div className="footerIconInfo">
            <a href={this.state.url}>{this.state.name}</a>
          </div>
        </div>


    );
  }
}

export default GitCard;
