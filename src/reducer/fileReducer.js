import {actionTypes} from "../constants/index";

const fileReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.DELETEELEMENT:
      let tempState = { ...state };
      let toDeleteItem = tempState.fs[action.payload.toDeleteItem];
      let parentItem = tempState.fs[toDeleteItem.parent].children;

      // removing toDeleteItem's refrence from parent
      let index = parentItem.indexOf(action.payload.toDeleteItem);
      if (index > -1) {
        tempState.fs[toDeleteItem.parent].children.splice(index, 1);
      }

      // removing all sub element of the object
      if (toDeleteItem.children && toDeleteItem.children.length > 0) {
        toDeleteItem.children.map(ele => {
          delete tempState.fs[ele];
        });
      }

      // removing toDeleteItem from tempstate
      delete tempState.fs[action.payload.toDeleteItem];

      return { ...tempState, selectedItemId: null, showContextMenu: false };

    case actionTypes.CREATENEWELEMENT:
      // to create new item
      let newState = { ...state };
      newState.fs[action.payload.value.parent].children.push(
        action.payload.key
      );
      newState.fs[action.payload.key] = action.payload.value;

      return { ...newState, showAddItemForm: false };

    case actionTypes.SHOWADDITEMFORM:
      // to add item
      return {
        ...state,
        showAddItemForm: action.payload.showAddItemForm
      };
    case actionTypes.SETSELECTEDITEMID:
      // to set selcted element
      return {
        ...state,
        selectedItemId: action.payload.selectedItemId
      };
    case actionTypes.SETCURRENTPARENT:
      // to set current parent
      return {
        ...state,
        currentParent: action.payload,
        showContextMenu: false,
        selectedItemId: null
      };

    case actionTypes.SHOWCONTEXTMENU:
      // to show show context menu
      return {
        ...state,
        showContextMenu: action.payload.showContextMenu,
        selectedItemId: action.payload.selectedItemId
      };

    case actionTypes.SHOWFILEINFO:
      // to show file info
      return {
        ...state,
        showFileInfo: action.payload.showFileInfo,
        showContextMenu: false
      };

    default:
      return state;
  }
};

export default fileReducer;
