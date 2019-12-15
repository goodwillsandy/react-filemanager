import React from "react";
import SidebarItem from "./sideBarItem";

const SideBar = props => {
  return (
    <div className="sideBar">
      <ul className="list-style-none">
        <li onClick={() => props.handleClick(0)} id="root">Root</li>
        {props.fs[0].children.map(ele => {
          if (props.fs[ele].type === "folder")
            return (
              <SidebarItem
                key={ele}
                id={props.fs[ele].id}
                name={props.fs[ele].name}
                isempty={props.fs[ele].children.length === 0}
                handleClick={(data) => props.handleClick(data)}
                fs={props.fs}
              />
            );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
