import React from "react";

const ControlButton = props => {
  return (
    <div
      className="flex flex-justify-between flex-align-center"
      onClick={e => props.handleClick()}
    >
      <img src={props.src} alt="back button" />
    </div>
  );
};

export default ControlButton;
