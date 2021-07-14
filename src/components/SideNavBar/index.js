import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsFillPersonFill, BsMusicNoteBeamed} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {RiPlayListFill} from 'react-icons/ri'

import './index.css'

class SideNavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/strawhat/image/upload/v1625982829/Spotify-remix/Vector_nsq3py.svg"
            className="spotify-logo"
            alt="spotify logo"
          />
        </Link>
        <ul className="nav-menu">
          <Link to="/profile" className="nav-link">
            <BsFillPersonFill className="nav-icon" />
            <li className="nav-text">Profile</li>
          </Link>

          <Link to="/home" className="nav-link">
            <AiFillHome className="nav-icon" />
            <li className="nav-text">Home</li>
          </Link>
          <Link to="/yourmusic" className="nav-link">
            <BsMusicNoteBeamed className="nav-icon" />
            <li className="nav-music-text">Your Music</li>
          </Link>
          <Link to="/playlists" className="nav-link">
            <RiPlayListFill className="nav-icon" />
            <li className="nav-text">Playlists</li>
          </Link>
        </ul>
      </div>
    )
  }
}

export default SideNavBar
