import {Link} from 'react-router-dom'

import './index.css'

const DisplayCategory = props => {
  const {Category} = props
  return (
    <div className="each-category-container">
      <Link to={`/categories/${Category.id}`} className="category-link">
        <h1 className="category-name">{Category.name}</h1>
        <img
          src={Category.icons[0].url}
          className="category-image"
          alt={`${Category.name}`}
        />
      </Link>
    </div>
  )
}

export default DisplayCategory
