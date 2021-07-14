import {Component} from 'react'

import DisplayNewReleases from '../DisplayNewReleases'

import './index.css'

class NewReleases extends Component {
  state = {newReleasesData: []}

  componentDidMount() {
    this.getNewReleases()
  }

  getNewReleases = async () => {
    const {country} = this.props
    const paToken = localStorage.getItem('pa_token')

    const apiURL = `https://api.spotify.com/v1/browse/new-releases?country=${country}`
    const options = {
      headers: {
        Authorization: `Bearer ${paToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiURL, options)
    const fetchNewReleasesData = await response.json()

    this.setState({newReleasesData: fetchNewReleasesData.albums.items})
  }

  render() {
    const {newReleasesData} = this.state

    return (
      <>
        <h1 className="geners-title">New Releases</h1>
        <div className="categories-card">
          {newReleasesData.map(eachAlbum => (
            <DisplayNewReleases eachAlbum={eachAlbum} key={eachAlbum.id} />
          ))}
        </div>
      </>
    )
  }
}

export default NewReleases
