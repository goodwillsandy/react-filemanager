import React from "react";

const AddItemForm = props => {
  let type = "folder";
  let toggleActive = e => {
    let parent = e.currentTarget.parentNode.childNodes;
    Object.keys(parent).map(ele => parent[ele].classList.remove("active"));
    e.currentTarget.classList.add("active");
    type = e.currentTarget.innerHTML === "Folder" ? "folder" : "file";
  };
  return (
    <div className="addItem_wrapper">
      <div className="addItem_header text-center flex">
        <div>Create New</div>
        <span onClick={() => props.handleClose()} className="close_button">
          &#10006;
        </span>
      </div>
      <div className="addItem_content">
        <ul className="addItem_type flex">
          <li onClick={e => toggleActive(e)}>File</li>
          <li onClick={e => toggleActive(e)} className="active">
            Folder
          </li>
        </ul>
        <form
          className="addItem_form text-center"
          id="addItem_form"
          onSubmit={e => {
            e.preventDefault();
            let name = document.getElementById("item_name").value;
            let author = document.getElementById("item_author").value;
            let size = document.getElementById("item_size").value;
            let created_at = document.getElementById("item_creation_date")
              .value;
            let date = Date.now();
            let key = btoa(`${date}-${name}-${size}-${author}-${type}`);
            let value = {
              name,
              author,
              size,
              created_at,
              id: key,
              type,
              parent: props.currentParent,
              path: `${props.parentPath}/${name}`,
              parentPath: props.parentPath
            };

            if (type === "folder") {
              value["children"] = [];
            }
            props.handleSubmit({ key, value });
          }}
        >
          <div className="form-control">
            <label htmlFor="item_name">
              <input
                type="text"
                name="item_name"
                id="item_name"
                placeholder="Name"
              />
            </label>
          </div>
          <div className="form-control">
            <label htmlFor="item_author">
              <input
                type="text"
                name="item_author"
                id="item_author"
                placeholder="Author"
              />
            </label>
          </div>
          <div className="form-control">
            <label htmlFor="item_size">
              <input
                type="text"
                name="item_size"
                id="item_size"
                placeholder="Size"
              />
            </label>
          </div>
          <div className="form-control">
            <label htmlFor="item_creation_date">
              <input
                type="text"
                name="item_creation_date"
                id="item_creation_date"
                placeholder="Date"
              />
            </label>
          </div>
          <input
            className="submit_button"
            type="submit"
            name="submit"
            id="submit"
            value="Create Elemtent"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;
