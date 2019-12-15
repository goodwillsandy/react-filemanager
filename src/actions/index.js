import { actionTypes } from "../constants/index";

export const explorerActions = {
  setCurrentParent: payload => {
    return {
      type: "SETCURRENTPARENT",
      payload
    };
  },
  showContextMenu: payload => {
    return {
      type: actionTypes.SHOWCONTEXTMENU,
      payload
    };
  },
  dispatchShowFileInfo: payload => {
    return {
      type: actionTypes.SHOWFILEINFO,
      payload
    };
  },
  setSelectedItemId: payload => {
    return {
      type: actionTypes.SETSELECTEDITEMID,
      payload
    };
  },
  showAddItemForm: payload => {
    return {
      type: actionTypes.SHOWADDITEMFORM,
      payload
    };
  },
  createNewElement: payload => {
    return {
      type: actionTypes.CREATENEWELEMENT,
      payload
    };
  },
  deleteElement: payload => {
    return {
      type: actionTypes.DELETEELEMENT,
      payload
    };
  }
};
