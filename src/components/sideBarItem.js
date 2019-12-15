import React from "react";

const SideBarItem = props => {
  const [toggleView, setToggleView] = React.useState(false);

  return (
    <li className="flex flex-column">
      <div className="flex flex-justify-between">
        <span onClick={() => props.handleClick(props.id)}>{props.name}</span>
        {!props.isempty && (
          <img
            onClick={() => {
              setToggleView(!toggleView);
            }}
            src="images/dropdown.svg"
            className={toggleView ? "transform-180" : ""}
            alt="dropdown-icon"
          />
        )}
      </div>
      {!props.isempty && (
        <ul className={toggleView ? "hide" : "sublist"}>
          {props.fs[props.id].children.map(ele => {
            if (props.fs[ele].type === "folder")
              return (
                <li
                  key={ele}
                  onClick={e => {
                    e.preventDefault();
                    console.log(ele, "ele");
                    props.handleClick(ele);
                  }}
                >
                  {props.fs[ele].name}
                </li>
              );
          })}
        </ul>
      )}
    </li>
  );
};

export default SideBarItem;
