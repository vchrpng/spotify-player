import { put } from 'redux-saga/effects'
import { fetchAlbumSuccess , fetchAlbumFailure } from '../actions/album'

export function * fetchAlbumSaga(action) {
    try {
        const res = yield axios.get('https://api.spotify.com/v1/me/albums',{ 
            headers : {
                'Authorization': 'Bearer ' + action.accessToken
            }}
        )
        console.log(res)
        yield put(fetchAlbumSuccess(res))
    } catch(err) {
        yield put(fetchAlbumFailure(err))
    }
} 
