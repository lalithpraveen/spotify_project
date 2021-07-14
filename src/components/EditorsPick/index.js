import {Component} from 'react'
import moment from 'moment'

import DisplayEditorsPick from '../DisplayEditorsPick'

import './index.css'

class EditorsPick extends Component {
  state = {playlistTitle: '', playlistItems: []}

  componentDidMount() {
    this.getFeaturedPlaylists()
  }

  getFeaturedPlaylists = async () => {
    const {country} = this.props
    const paToken = localStorage.getItem('pa_token')
    const timeStamp = moment(new Date()).format('YYYY-MM-DDTHH:00:00')
    const apiURL = `https://api.spotify.com/v1/browse/featured-playlists?country=${country}&timestamp=${timeStamp}`
    const options = {
      headers: {
        Authorization: `Bearer ${paToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiURL, options)
    const fetchedData = await response.json()

    this.setState({
      playlistTitle: fetchedData.message,
      playlistItems: fetchedData.playlists.items,
    })
  }

  render() {
    const {playlistTitle, playlistItems} = this.state

    return (
      <div>
        <h1 className="playlist-title">{playlistTitle}</h1>
        <div className="editor-card">
          {playlistItems.map(eachTrack => (
            <DisplayEditorsPick track={eachTrack} key={eachTrack.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default EditorsPick
