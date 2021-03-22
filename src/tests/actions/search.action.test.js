import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();
import { setSearchKeyword } from "../../actions/search.action";


describe("search actions", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });

  it("test search action", async () => {
    const payload = "hello";
    const startAction = {
      type: "SET_SEARCH_KEYWORD",
      payload: payload,
    };
    await store.dispatch(setSearchKeyword(payload));
    const actions = store.getActions();
    expect(actions[0]).toEqual(startAction);
  });
});
