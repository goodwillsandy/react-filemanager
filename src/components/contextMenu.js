import React from "react";

const ContextMenu = props => {
  return (
    <ul className="context-menu">
      <li onClick={(e) => props.handleOpen()}>Open</li>
      <li onClick={() => props.handleGetInfo()}>Get Info</li>
      <li className="delete" onClick={() => props.handleDelete()}>Delete</li>
    </ul>
  );
};

export default ContextMenu;
