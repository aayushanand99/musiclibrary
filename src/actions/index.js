import constants from '../utils/constants'
export function getSongs(params){
    return (dispatch)=>{
        dispatch({
            type: constants.songs_fetch
        })
        fetch('https://itunes.apple.com/in/rss/topalbums/limit=100/json',{method:'GET'})
            .then((resp) => {
                console.log(resp)
                return resp.json()
            })
            .then( (data)=> {
                dispatch({
                    type: constants.songs_success,
                    payload:data.feed.entry
                })
            })
            .catch((error) => { 
                dispatch({
                    type: constants.songs_failure,
                })
            })
    }
}

export function searchSongs(param){
    return (dispatch)=>{
        dispatch({
            type:constants.searchSongs,
            payload:param.arr
        })
    }
}