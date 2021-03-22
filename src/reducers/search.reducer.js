const initialState = {
    searchKeyword: ''
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_KEYWORD': {
            return { ...state, searchKeyword: action.payload }
        }
        default:
            return state
    }
}

export default searchReducer
