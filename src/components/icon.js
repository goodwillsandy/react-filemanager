import React from "react";
import ContextMenu from "./contextMenu";

const Icon = props => {
  return (
    <li
      className={`icon_wrapper ${props.id === props.selectedItemId &&
        "active_icon"}`}
      key={props.key}
      data-id={props.id}
      onClick={e => props.handleClick()}
      onDoubleClick={e => props.handleDoubleClick()}
      onContextMenu={e => {
        e.preventDefault();
        props.handleRightClick();
      }}
    >
      <div className="icon">
        <img src={props.src} alt="images" />
      </div>

      <p className="icon_text">{props.name}</p>

      {/* loading context menu dynamically */}
      {props.id === props.selectedItemId && props.showContextMenu ? (
        <ContextMenu
          handleOpen={() => props.handleDoubleClick()}
          handleGetInfo={() => props.toogleFileInfo()}
          handleDelete={() => props.handleDelete()}
        />
      ) : null}
    </li>
  );
};

export default Icon;
