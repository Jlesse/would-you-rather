import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import AppNav from './AppNav'
import { handleInitialData } from '../actions/shared'
import { Grid } from 'react-bootstrap'
import PrivateRoute from './PrivateRoute'
import ErrorPage from './ErrorPage'


class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props
    return (
      <Fragment>
        <Router>
          <div className='container'>
            <Grid>
              <Switch>
                <Route path='/404' exact component={ErrorPage}/>
                <Route path='/login' exact component={Login}/>
                <Route path='/' component={AppNav}/>
              </Switch>
              <PrivateRoute authedUser={authedUser} path='/' exact component={Dashboard}/>
              <PrivateRoute authedUser={authedUser} path='/question/:question_id' component={QuestionPage}/>
              <PrivateRoute authedUser={authedUser} path='/add' component={NewQuestion}/>
              <PrivateRoute authedUser={authedUser} path='/leaderboard' component={LeaderBoard}/>
            </Grid>
          </div>
        </Router>
      </Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

const mapStateToProps = ({authedUser}) => {
  return { authedUser }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
