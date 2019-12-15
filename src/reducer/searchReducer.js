const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case "searchData":
      return { ...state };

    default:
      return state;
  }
};

export default searchReducer;
