import './index.css'

const SpecificPlaylistTrackDetails = props => {
  const {eachTrack} = props
  function getDuration(milliSeconds) {
    const minutes = Math.floor(milliSeconds / 60000)
    const seconds = ((milliSeconds % 60000) / 1000).toFixed(0)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }
  const duration = getDuration(eachTrack.track.duration_ms)
  return (
    <li className="list-card">
      <ul className="track-details-list">
        <li className="each-list-item">{eachTrack.track.name}</li>
        <li className="each-list-item">{eachTrack.track.album.name}</li>
        <li className="each-list-item">{duration}</li>
        <li className="each-list-item">{eachTrack.track.artists[0].name}</li>
      </ul>
    </li>
  )
}

export default SpecificPlaylistTrackDetails
