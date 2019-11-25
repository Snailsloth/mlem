import React, { Component } from "react";

class Error extends Component {
  render() {
    return (
      <div className='container content'>
        <h1 className='text--center heading'>Not Found</h1>
        <video
          className='isBlock margin--auto'
          autoplay='true'
          loop='true'
          muted='true'
        >
          <source src='/assets/404.webm' type='video/webm' />
          <source src='/assets/404.mp4' type='video/mp4' />
        </video>
      </div>
    );
  }
}

export default Error;
