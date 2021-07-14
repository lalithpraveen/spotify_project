import {Component} from 'react'

import DisplayCategory from '../DisplayCategory'
import './index.css'

class Categories extends Component {
  state = {categoriesData: []}

  componentDidMount() {
    this.getBrowseCategories()
  }

  getBrowseCategories = async () => {
    const paToken = localStorage.getItem('pa_token')

    const apiURL = 'https://api.spotify.com/v1/browse/categories'
    const options = {
      headers: {
        Authorization: `Bearer ${paToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiURL, options)
    const fetchedCategoriesData = await response.json()

    this.setState({categoriesData: fetchedCategoriesData.categories.items})
  }

  render() {
    const {categoriesData} = this.state

    return (
      <>
        <h1 className="geners-title">Genres & Moods</h1>
        <div className="categories-card">
          {categoriesData.map(eachCategory => (
            <DisplayCategory Category={eachCategory} key={eachCategory.id} />
          ))}
        </div>
      </>
    )
  }
}

export default Categories
