import React, { useEffect } from "react";

const NotFound = props => {
  useEffect(() => {
    console.log("mount it!");
    props.pageSwitchHandler("404");
  }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  return (
    <>
      <video
        className='isBlock w100 h100 margin--auto'
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source src='/assets/404.webm' type='video/webm' />
        <source src='/assets/404.mp4' type='video/mp4' />
      </video>
    </>
  );
};

export default NotFound;
