import searchReducer from "../../reducers/search.reducer";

const initialState = {
  searchKeyword: "",
};
describe("search reducer", () => {
  test("should return the initial state", () => {
    const newState = searchReducer(initialState, {});
    expect(newState).toEqual({
      searchKeyword: "",
    });
  });
  it('should handle SET_SEARCH_KEYWORD', () => {
    const startAction = {
      type: 'SET_SEARCH_KEYWORD',
      payload: "test"
    };
    const newState = searchReducer(initialState, startAction);
    expect(newState).toEqual({ searchKeyword: "test"  });
  });
});
