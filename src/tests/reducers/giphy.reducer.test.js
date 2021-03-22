import giphyReducer from "../../reducers/giphy.reducer";
import data from "../../../data/giphy.json";

const initialState = {
    gifs: []
};
describe("giphy reducer", () => {
  test("should return the initial state", () => {
    const newState = giphyReducer(initialState, {});
    expect(newState).toEqual({
        gifs: []
    });
  });
  it('should handle GET_GIF_DATA', () => {
    const startAction = {
      type: 'GET_GIF_DATA',
      payload: data.data.data
    };
    const newState = giphyReducer(initialState, startAction);
    expect(newState).toEqual({ gifs:data.data.data  });
  });
});
