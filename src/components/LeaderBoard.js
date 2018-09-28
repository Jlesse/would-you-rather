import React, { Component, Fragment } from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
  render () {
    return (
      <Fragment>
        <h1 className='center-text'>Leaderboard</h1>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Asked</th>
              <th>Answered</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.users.map((u) => {
                return (
                  <tr key={u.id}>
                    <td><img className='avatar' alt='user avatar' src={u.avatarURL}/></td>
                    <td>{u.name}</td>
                    <td>{u.asked}</td>
                    <td>{u.answered}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Fragment>
    )
  }
}

function mapStateToProps({users}){
  return {
    users: Object.keys(users).map((id) => {
      const { name, avatarURL, answers, questions} = users[id]
      return {
        id,
        name,
        avatarURL,
        answered: Object.keys(answers).length,
        asked: questions.length
      }
    }).sort((a,b) => {
      return (b.answered + b.asked) - (a.answered + a.asked)
    })
  }
}

export default connect(mapStateToProps)(LeaderBoard)