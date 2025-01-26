import React from 'react'
import { Link } from 'react-router-dom'

function Items(props) {
  return (
    <div>
      <Link  className='nav-btn' to={props.url}>{props.text}</Link>
    </div>
  )
}

export default Items