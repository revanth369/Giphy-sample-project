const initialState = {
    gifs: []
}

export const giphyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_GIF_DATA': {
            return { ...state, gifs: action.payload }
        }
        default:
            return state
    }
}

export default giphyReducer
