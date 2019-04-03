import React, { Component } from 'react';
import style from '../Card.scss'
import twitterLogo from './twitter.svg'

class TwitterCard extends Component {
  constructor(){
    super();
    this.state = {
      name: ``,
      avatar: ``,
      url: ``,
      tweetDate: '',
      tweetText: ''
    }
  }

  componentDidMount(){
    fetch(`http://localhost:5000/twitter/${this.props.user}`)
    .then(results => {
      // console.log(results.json())
      return results.json()

    })
    .then(data => {
      this.setState({
          name: data.username,
          avatar: data.userimage,
          url: data.userLink,
          tweetDate: data.lastTweetDate.slice(0,9),
          tweetText: data.lastTweetText
      })
    })
  }

  render() {

    const twitterDefault = (
      <div className="liveCard">
        <img className="svgMask--twitter" src={twitterLogo} alt="Twitter icon"/>

        <div className="footerIconInfo">
          <a href="/">Twitter username</a>
        </div>
      </div>
    )


    const twitterSuccess = (
      <div className="liveCard">
        <img className="svgMask--twitter" src={this.state.avatar} alt={this.state.name}/>

        <div className="liveCard-Info">
          <a target="_blank"  className="text--center" href={this.state.url}>{this.state.name}</a>
          <p>Last tweet @ {this.state.tweetDate}: <br/>
             &laquo;<span> {this.state.tweetText} </span>&raquo;
          </p>
        </div>
      </div>
    )


    return (

        (this.state.name.length > 0) ? twitterSuccess : twitterDefault

    );
  }
}

export default TwitterCard;
