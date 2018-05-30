import constants from '../utils/constants'
export function songsReducer(state = {}, action){
    switch(action.type){
        case constants.songs_fetch: return null
        case constants.songs_success: return {...state,songs:action.payload}
        case constants.songs_failure:return null
        default: return state
    }
}