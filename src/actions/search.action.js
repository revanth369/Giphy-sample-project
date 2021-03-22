export const setSearchKeyword = payload => {
  return dispatch => {
    dispatch({
      type: "SET_SEARCH_KEYWORD",
      payload
    });
  };
};
