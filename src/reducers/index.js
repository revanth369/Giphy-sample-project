import { combineReducers } from 'redux'

import searchReducer from './search.reducer'
import giphyReducer from './giphy.reducer'

const reducers = combineReducers({
    giphy: giphyReducer,
    search: searchReducer, 
})

export default reducers
