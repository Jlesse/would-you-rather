import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import {setAuthedUser} from '../actions/authedUser'


class AppNav extends Component {

  render () {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Would Your Rather?
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem onClick={()=> this.props.history.push("/leaderboard")}>Leaderboard</NavItem>
            <NavItem onClick={()=> this.props.history.push("/add")}>New Poll</NavItem>
            <NavItem onClick={()=> this.props.history.push("/")}>Dashboard</NavItem>
          </Nav>
          <Nav pullRight className='logged-in-user'>
            <NavItem>
              User: {this.props.user ? this.props.user.name : ''}
            </NavItem>
            <NavItem onClick={this.props.logout}>
              Logout
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users}){
  return { 
    user: users[authedUser]
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    logout: () => {
      dispatch(setAuthedUser(null))
      ownProps.history.push('/login')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNav)