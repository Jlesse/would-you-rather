import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
  <Route {...rest} render={(props) => (
      authedUser != null ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: { from: props.location.pathname} }} />
  )} />
)

export default PrivateRoute