import constants from '../utils/constants'

export function searchReducer(state = {}, action) {
    switch(action.type){
        case constants.searchSongs:return {...state,searchResult:action.payload}
        default:return state
    }
}