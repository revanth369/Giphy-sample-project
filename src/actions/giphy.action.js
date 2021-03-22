import axios from "axios";

export const getGiphyData = requestPayload => {
  return dispatch => {
    const apiKey = "TcEF3AaVdBGNo2GtLu7iRJRpUmd3R1I5";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${requestPayload}&limit=20`;
    axios.get(url).then(response => {
      dispatch({
        type: "GET_GIF_DATA",
        payload: response.data.data
      });
    });
  };
};
