import React from "react";
import PathBar from "./pathbar";
import ControlButton from "./controlButton";
import SearchBar from "./searchBar";

const TopBar = props => {
  return (
    <div className="flex flex-justify-between flex-align-center">
      <div className="flex">
        <ControlButton
          handleClick={() => props.handleClick()}
          src="/images/back-arrow.png"
        />
        <PathBar name={props.path} />
      </div>
      <SearchBar
        fs={props.fs}
        currentParent={props.currentParent}
        handleClick={data => props.searchResultCick(data)}
      />
    </div>
  );
};

export default TopBar;
