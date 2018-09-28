import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = (props) => {
  return (
    <div>
      <h1> 404, Question does not exist</h1>
      <p>
        please 
        <Link to={{pathname: '/login', state: { from: '/'} }}> login </Link>
        to the app!
      </p>
    </div>
  )
}

export default ErrorPage