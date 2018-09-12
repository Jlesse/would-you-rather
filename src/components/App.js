import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import { handleInitialData } from '../actions/shared'
import { Grid } from 'react-bootstrap'

class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            <Grid>
              <Route path='/login' component={Login}/>
              <Route path='/' exact component={Dashboard}/>
              <Route path='/questions/:questions_id' component={QuestionPage}/>
              <Route path='/add' component={NewQuestion}/>
              <Route path='/leaderboard' component={LeaderBoard}/>
            </Grid>
          </div>
        </Fragment>
      </Router>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return { dispatch }
}

export default connect(null, mapDispatchToProps)(App)
