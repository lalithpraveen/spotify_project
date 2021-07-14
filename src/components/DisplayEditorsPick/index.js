import {Link} from 'react-router-dom'
import './index.css'

const DisplayEditorsPick = props => {
  const {track} = props
  return (
    <div className="display-editor-pick-container">
      <Link to={`/specificPlaylist/${track.id}`} className="link-class">
        <img
          src={track.images[0].url}
          className="editors-pick-image"
          alt={`${track.name}`}
        />
        <p className="track-name">{track.name}</p>
      </Link>
    </div>
  )
}

export default DisplayEditorsPick
