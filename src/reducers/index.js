import { combineReducers } from "redux";
import {songsReducer} from './songsReducer'
import {searchReducer} from './searchReducer'

const rootReducer = combineReducers({
    //app state json fetching data from reducers
    // state1: reducer1,
    // calculator: calculator
    songsReducer,
    searchReducer
});
export default rootReducer