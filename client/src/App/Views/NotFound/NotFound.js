import React, { useEffect } from "react";

const NotFound = props => {
  useEffect(() => {
    console.log("mount it!");
    props.pageSwitchHandler("404");
  }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  return (
    <div className='container content'>
      <h1 className='text--center heading'>Not Found</h1>
      <video
        className='isBlock margin--auto'
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source src='/assets/404.webm' type='video/webm' />
        <source src='/assets/404.mp4' type='video/mp4' />
      </video>
    </div>
  );
};

export default NotFound;
