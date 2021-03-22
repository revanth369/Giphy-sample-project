import configureStore from "redux-mock-store";

import thunk from "redux-thunk";
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();
import data from "../../../data/giphy.json";

import { getGiphyData } from "../../actions/giphy.action";
import axios from "axios";
jest.mock("axios");

describe("giphy actions", () => {
  beforeEach(() => {
    // Runs before each test in the suite
    store.clearActions();
  });

  it("fetch giphy data", async () => {
    axios.get.mockResolvedValue(data);
    const payload = data.data.data;
    const startAction = {
      type: "GET_GIF_DATA",
      payload: payload,
    };
    await store.dispatch(getGiphyData("hello"));
    const actions = store.getActions();
    expect(actions[0]).toEqual(startAction);
  });
});
