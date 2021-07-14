import {Component} from 'react'

import SideNavBar from '../SideNavBar'
import EditorsPick from '../EditorsPick'
import Categories from '../Categories'
import NewReleases from '../NewReleases'

import './index.css'

class SpotifyClone extends Component {
  state = {country: ''}

  componentDidMount() {
    this.getUserInformation()
  }

  getUserInformation = async () => {
    const paToken = localStorage.getItem('pa_token')
    const apiUrl = 'https://api.spotify.com/v1/me'
    const options = {
      headers: {
        Authorization: `Bearer ${paToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()
    this.setState({country: fetchedData.country})
  }

  render() {
    const {country} = this.state

    return (
      <div className="home-background-container">
        <SideNavBar />
        <div className="main-container">
          <EditorsPick country={country} />
          <Categories />
          <NewReleases country={country} />
        </div>
      </div>
    )
  }
}

export default SpotifyClone
