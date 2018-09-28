import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, Row, Col} from 'react-bootstrap'
import Option from './Option'
import { Redirect } from 'react-router-dom'


class QuestionPage extends Component {
  render () {
    const {question, author} = this.props

    if(question){
      const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
      const user = this.props.user
      return (
        <Panel>
          <Panel.Heading>Would You Rather?</Panel.Heading>
          <Panel.Body>
            <h1>Author: {author.name} <img className='avatar' alt='user avatar' src={author.avatarURL} /></h1>
            <Row>
              <Col xs={4}>
                <Option voteCount={question.optionOne.votes.length} 
                        text={question.optionOne.text} 
                        totalVotes={totalVotes} 
                        question={question} 
                        user={user}
                        optionNum="optionOne"/>
              </Col>
              <Col xs={4}>
                <h1> OR </h1>
              </Col>
              <Col xs={4}>
                <Option voteCount={question.optionTwo.votes.length} 
                        text={question.optionTwo.text}
                        totalVotes={totalVotes} 
                        question={question}
                        user={user}
                        optionNum="optionTwo"/>
              </Col>
            </Row>
          </Panel.Body>
        </Panel>
      )
    } else {
      return (<Redirect to='/404'/>)
    }
  }
}

function mapStateToProps({questions, authedUser, users}, {match}){
  const qid = match.params.question_id
  const question = questions[qid]
  const author =  question ? users[question.author] : null
  return {
    author,
    question,
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(QuestionPage)