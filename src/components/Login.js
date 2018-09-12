import React, { Component } from 'react'
import { connect } from 'react-redux'
import {DropdownButton, MenuItem, Row, Col} from 'react-bootstrap'
import {setAuthedUser} from '../actions/authedUser'
import {Redirect} from 'react-router'

class Login extends Component {
  state = {
    toHome: false
  }

  handleLogin(id){
    this.props.dispatch(setAuthedUser(id))
    this.setState(()=>{
      return {toHome: true}
    })
  }

  render () {
    if(this.state.toHome){
      return <Redirect to='/'/>
    } else {
      return (
        <div>
          <Row>
            <Col xs={6} xsOffset={4}>
              <DropdownButton bsStyle='default' title="Login" id='login-dropdown'>
                {this.props.users.map((user) => (
                  <MenuItem key={user.id} id={user.id} onClick={() => this.handleLogin(user.id)}>{user.name}</MenuItem>
                ))}
              </DropdownButton>
            </Col>
          </Row>
        </div>
      )
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
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