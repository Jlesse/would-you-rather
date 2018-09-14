import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, ListGroup, ListGroupItem, Button} from 'react-bootstrap'

class Dashboard extends Component {
  state = {
    viewAnswered: false
  }

  answeredQuestions = () => {
    const {questions, user} = this.props
    return questions.filter((question)=>{
      return Object.keys(user.answers).includes(question.id)
    })
  }

  unansweredQuestions = () => {
    return this.props.questions.filter((question) => {
      return !(this.answeredQuestions().includes(question))
    })
  }

  shownQuestions = () => {
    return (this.state.viewAnswered ? this.answeredQuestions() : this.unansweredQuestions());
  }

  toggleQuestions = () => {
    this.setState((prevState) => ({viewAnswered: !prevState.viewAnswered}))
  }

  render () {
    return (
      <div>
        <Row>
          <Col xs={8}>
            <h1 className='text-right'>DASHBOARD</h1>
          </Col>
          <Col xs={4}>
            <Button onClick={this.toggleQuestions}>Veiw Answered</Button>
          </Col>
        </Row>
        <ListGroup>
          { 
            this.shownQuestions().map((question)=>{
              const {optionOne, optionTwo} = question
              return <ListGroupItem className='text-center' key={question.id} header="Would you rather?">{`${optionOne.text} OR ${optionTwo.text}`}</ListGroupItem>
            })
          }
        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps({questions, users, authedUser}){
  console.log(authedUser)
  return {
    user: users[authedUser],
    questions: Object.keys(questions).map((id) => {
      return questions[id]
    })
  }
}
export default connect(mapStateToProps)(Dashboard)