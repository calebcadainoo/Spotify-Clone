import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player'
import { useDataLayerValue, DataLayerContext } from './components/DataLayer'

const spotify = new SpotifyWebApi()

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue()

  // Run code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      
      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        // add value to the DataLayer
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        })
      })

      spotify.getPlaylist('37i9dQZEVXcDRInCd7sMJ3').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      })
    }
  }, [])

  return (
    <div className="app">
      {/* Left off @ 3:08:25
      https://youtu.be/pnkuI8KXW_8 */}
      {
        token ? ( <Player spotify={spotify} /> )  : ( <Login /> )
      }
    </div>
  );
}

export default App;
