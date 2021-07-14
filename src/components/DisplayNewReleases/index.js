import {Link} from 'react-router-dom'

import './index.css'

const DisplayNewReleases = props => {
  const {eachAlbum} = props

  return (
    <div>
      <Link
        to={`/specificNewReleases/${eachAlbum.id}`}
        className="newreleases-link"
      >
        <img
          src={eachAlbum.images[0].url}
          className="newreleases-image"
          alt={`${eachAlbum.name}`}
        />
        <p className="album-names">{eachAlbum.name}</p>
      </Link>
    </div>
  )
}

export default DisplayNewReleases
