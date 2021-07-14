import {BiArrowBack} from 'react-icons/bi'

import './index.css'

const BackArrow = () => (
  <div className="arrow-container">
    <BiArrowBack className="arrow" />
    <p className="arrow-back-text">back</p>
  </div>
)

export default BackArrow
