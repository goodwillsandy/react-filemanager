import React from "react";

const FileInfo = props => {
  return (
    <div className="fileinfo_wrapper">
      <div className="fileinfo_header text-center flex">
        <div>File Info</div>
        <span className="close_button" onClick={() => props.handleClose()}>
          &#10006;
        </span>
      </div>
      <ul className="fileinfo_content">
        <li className="icon">
          <img src={props.src} alt="images" />
        </li>
        <li>
          <span>Name:</span> <span className="dull_text">{props.name}</span>
        </li>
        <li>
          <span>Size:</span>
          <span className="dull_text">{props.size ? props.size : "N/A"}</span>
        </li>
        <li>
          <span>Author:</span>
          <span className="dull_text">
            {props.author ? props.author : "N/A"}
          </span>
        </li>
        <li>
          <span>Created On:</span>
          <span className="dull_text">
            {props.creation_date ? props.creation_date : "N/A"}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FileInfo;
