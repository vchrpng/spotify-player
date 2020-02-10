import * as types from '../actionTypes'

const defaultState = {
    fetchSongsRequest: true,
    songPlaying: false,
    timeElapsed: 0,
    songId: 0,
    viewType:'songs',
    songPaused: true
  }
  
  export const songsReducer = (state = defaultState, action) => {
    switch (action.type) {
    case types.UPDATE_VIEW_TYPE:
      return {
        ...state,
        viewType: action.view
      }
  
    case types.FETCH_SONGS_REQUEST:
      return {
        ...state,
        fetchSongsRequest: true
      }
  
    case types.FETCH_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.songs,
        fetchSongsFailure: false,
        fetchSongsRequest: false,
        viewType: 'songs'
      }
  
    case types.FETCH_SONGS_FAILURE:
      return {
        ...state,
        fetchSongsFailure: true,
        fetchSongsRequest: false
      }
  
    case types.SEARCH_SONGS_REQUEST:
      return {
        ...state,
        searchSongsRequest: true
      }
  
    case types.SEARCH_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.songs,
        searchSongsFailure: false,
        searchSongsRequest: false,
        viewType: 'search'
      }
  
    case types.SEARCH_SONGS_FAILURE:
      return {
        ...state,
        searchSongsFailure: true,
        searchSongsRequest: false
      }
  
    case types.FETCH_RECENTLY_PLAYED_REQUEST:
      return {
        ...state,
        fetchSongsRequest: true
      }
  
    case types.FETCH_RECENTLY_PLAYED_SUCCESS:
      return {
        ...state,
        songs: action.songs,
        viewType: 'Recently Played',
        fetchSongsFailure: false,
        fetchSongsRequest: false
      }
  
    case types.FETCH_RECENTLY_PLAYED_FAILURE:
      return {
        ...state,
        fetchSongsFailure: true,
        fetchSongsRequest: false
      }
  
    case types.FETCH_PLAYLIST_SONGS_REQUEST:
      return {
        ...state,
        fetchPlaylistSongsRequest: true
      }
  
    case types.FETCH_PLAYLIST_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.songs,
        viewType: 'playlist',
        fetchPlaylistSongsFailure: false,
        fetchPlaylistSongsRequest: false
      }
  
    case types.FETCH_PLAYLIST_SONGS_FAILURE:
      return {
        ...state,
        fetchPlaylistSongsFailure: true,
        fetchPlaylistSongsRequest: false
      }
  
    case types.FETCH_ARTIST_SONGS_REQUEST:
      return {
        ...state,
        fetchArtistSongsRequest: true
      }
  
    case types.FETCH_ARTIST_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.songs,
        viewType: 'Artist',
        fetchArtistSongsFailure: false,
        fetchArtistSongsRequest: false
      }
  
    case types.FETCH_ARTIST_SONGS_FAILURE:
      return {
        ...state,
        fetchArtistSongsFailure: true,
        fetchArtistSongsRequest: false
      }
  
    case types.PLAY_SONG:
      return {
        ...state,
        songPlaying: true,
        songDetails: action.song,
        songId: action.song.id,
        timeElapsed: 0,
        songPaused: false
      }
  
    case types.STOP_SONG:
      return {
        ...state,
        songPlaying: false,
        songDetails: null,
        timeElapsed: 0,
        songPaused: true
      }
  
    case types.PAUSE_SONG:
      return {
        ...state,
        songPaused: true
      }
  
    case types.RESUME_SONG:
      return {
        ...state,
        songPaused: false
      }
  
    case types.INCREASE_SONG_TIME:
      return {
        ...state,
        timeElapsed: action.time
      }
  
    default:
      return state
    }
  
  }
  
  export default songsReducer