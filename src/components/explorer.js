import React from "react";
import Icon from "./icon";
import FileInfo from "./fileInfo";
import Topbar from "./topbar";
import AddItemForm from "./addItemForm";
import SideBar from "./sideBar";

const Explorer = props => {
  let getFolderFileIcon = ele => {
    return props.fs[ele].type === "folder"
      ? "/images/folder_icon.png"
      : "/images/file_icon.png";
  };
  return (
    <>
      <SideBar fs={props.fs} handleClick={id => props.dispatchState(id)} />
      <div className="explorer">
        {/* top bar */}
        <Topbar
          fs={props.fs}
          path={props.fs[props.currentParent].path}
          currentParent={props.currentParent}
          searchResultCick={id => props.dispatchState(id)}
          handleClick={
            props.fs[props.currentParent].parent != null
              ? e => props.dispatchState(props.fs[props.currentParent].parent)
              : () => console.log("You are at root")
          }
        />

        {/* xplorer window */}
        <ul className="flex list-style-none no-padding explorer_window">
          {props.fs[props.currentParent].children.map(ele => {
            return (
              <Icon
                key={ele}
                id={props.fs[ele].id}
                handleClick={() =>
                  props.dispatchSelectedItem({ selectedItemId: ele })
                }
                handleDoubleClick={
                  props.fs[ele].type === "folder"
                    ? () => props.dispatchState(props.fs[ele].id)
                    : () => console.log("Open this file")
                }
                handleRightClick={() =>
                  props.dispatchContextBoolean({
                    showContextMenu: !props.showContextMenu,
                    selectedItemId: props.fs[ele].id
                  })
                }
                toogleFileInfo={() =>
                  props.dispatchShowFileInfo({
                    showFileInfo: !props.showFileInfo
                  })
                }
                handleDelete={e =>
                  props.dispatchDeleteElement({
                    toDeleteItem: props.selectedItemId
                  })
                }
                src={getFolderFileIcon(ele)}
                name={props.fs[ele].name}
                showContextMenu={props.showContextMenu}
                selectedItemId={props.selectedItemId}
              />
            );
          })}
          <li
            onClick={e =>
              props.dispatchShowAddItemForm({
                showAddItemForm: !props.showAddItemForm
              })
            }
          >
            <div>
              <img src="/images/add_icon.png" alt="images" />
            </div>
            <p className="icon_text">{props.name}</p>
          </li>
        </ul>

        {/* adding file info modal */}
        {props.showFileInfo ? (
          <FileInfo
            handleClose={e =>
              props.dispatchShowFileInfo({
                showFileInfo: !props.showFileInfo
              })
            }
            src={getFolderFileIcon(props.selectedItemId)}
            name={props.fs[props.selectedItemId].name}
            size={props.fs[props.selectedItemId].size}
            author={props.fs[props.selectedItemId].author}
            creation_date={props.fs[props.selectedItemId].creation_date}
          />
        ) : null}

        {/* adding add file form modal */}
        {props.showAddItemForm ? (
          <AddItemForm
            currentParent={props.currentParent}
            parentPath={props.fs[props.currentParent].path}
            handleClose={e =>
              props.dispatchShowAddItemForm({
                showAddItemForm: !props.showAddItemForm
              })
            }
            handleSubmit={data => props.dispatchCreateElement(data)}
          />
        ) : null}
      </div>
    </>
  );
};

export default Explorer;
