import constants from '../utils/constants'
export function songsReducer(state = {}, action){
    switch(action.type){
        case constants.songs_fetch: return null
            break;
        case constants.songs_success: return {...state,songs:action.payload}
            break;
        case constants.songs_failure:return null
            break;
        default: return state
    }
}