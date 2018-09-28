import React, { Component } from 'react'
import { connect } from 'react-redux'
import {DropdownButton, MenuItem, Row, Col} from 'react-bootstrap'
import {setAuthedUser} from '../actions/authedUser'

class Login extends Component {

  render () {
    return (
      <div>
        <Row>
          <Col xs={6} xsOffset={4}>
            <DropdownButton bsStyle='default' title="Login" id='login-dropdown'>
              {this.props.users.map((user) => (
                <MenuItem key={user.id} id={user.id} onClick={() => this.props.handleLogin(user.id)}>{user.name}</MenuItem>
              ))}
            </DropdownButton>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleLogin: (id) => {
      dispatch(setAuthedUser(id))
      const toPage = ownProps.history.location.state ? ownProps.history.location.state.from : "/"
      ownProps.history.push(toPage)
    }
  }
}

function mapStateToProps ({users}) {
  return {
    users: Object.keys(users).map((id) => {
      return users[id]
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)