import { connect } from "react-redux";
import ExplorerComponent from "../components/explorer";
import { explorerActions } from "../actions";

const mapStateToProps = (state, props) => {
  return {
    fs: state.fileReducer.fs,
    currentParent: state.fileReducer.currentParent,
    showContextMenu: state.fileReducer.showContextMenu,
    selectedItemId: state.fileReducer.selectedItemId,
    showFileInfo: state.fileReducer.showFileInfo,
    showAddItemForm: state.fileReducer.showAddItemForm
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchState: data => {
    dispatch(explorerActions.setCurrentParent(data));
  },
  dispatchContextBoolean: data => {
    dispatch(explorerActions.showContextMenu(data));
  },
  dispatchShowFileInfo: data => {
    dispatch(explorerActions.dispatchShowFileInfo(data));
  },
  dispatchSelectedItem: data => {
    dispatch(explorerActions.setSelectedItemId(data));
  },
  dispatchShowAddItemForm: data => {
    dispatch(explorerActions.showAddItemForm(data));
  },
  dispatchCreateElement: data => {
    dispatch(explorerActions.createNewElement(data));
  },
  dispatchDeleteElement: data => {
    dispatch(explorerActions.deleteElement(data));
  }
});

const Explorer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplorerComponent);

export default Explorer;
