import {Component} from 'react'
import {Link} from 'react-router-dom'

import SideNavBar from '../SideNavBar'
import BackArrow from '../BackArrow'
import SpecificPlaylistTrackDetails from '../SpecificPlaylistTrackDetails'

import './index.css'

class SpecificPlaylist extends Component {
  state = {playlistData: [], playlistImage: '', playlistTracks: []}

  componentDidMount() {
    this.getPlaylistData()
  }

  getPlaylistData = async () => {
    const token = localStorage.getItem('pa_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://api.spotify.com/v1/users/spotify/playlists/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedPlaylists = await response.json()

    this.setState({
      playlistData: fetchedPlaylists,
      playlistImage: fetchedPlaylists.images[0].url,
      playlistTracks: fetchedPlaylists.tracks.items,
    })
  }

  render() {
    const {playlistData, playlistImage, playlistTracks} = this.state
    return (
      <div className="specific-playlist-bg-container">
        <SideNavBar />
        <div className="specifiv-playlist-card">
          <Link to="/" className="backarrow-link">
            <BackArrow />
          </Link>
          <div className="playlist-header">
            <img
              src={playlistImage}
              className="playlist-image"
              alt={playlistData.name}
            />
            <div className="header-details-card">
              <h1 className="editor-text">Editor`s picks</h1>
              <h1 className="album-name">{playlistData.name}</h1>
              <p className="album-description">{playlistData.description}</p>
            </div>
          </div>
          <ul className="songs-list-header">
            <li>Track</li>
            <li>Album</li>
            <li>Time</li>
            <li>Artist</li>
            <li>Added</li>
          </ul>
          <hr />
          <ol className="ordered-track-list">
            {playlistTracks.map(eachTrack => (
              <SpecificPlaylistTrackDetails
                eachTrack={eachTrack}
                key={eachTrack.track.name}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SpecificPlaylist
