import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

function Option(props){
  const { voteCount, user, question, totalVotes, optionNum, text, handleAnswer } = props
  const percentage = totalVotes === 0 ? '0%' : `${Math.floor((voteCount / totalVotes) * 100)}%`
  const selectedGlyph = (user.answers[question.id] === optionNum) ? 'star' : 'star-empty'

  return (
    <div>
      <h4>{text}</h4>
      <h4>votes: {voteCount}</h4>
      <h4>Percentage: {percentage}</h4>
      <Button onClick={handleAnswer}>
        <Glyphicon glyph={selectedGlyph}></Glyphicon>
      </Button>
    </div>
  )
}


function mapDispatchToProps(dispatch, ownProps){
  const { user, question, optionNum } = ownProps
  return {
    handleAnswer: () => {
      if(Object.keys(user.answers).includes(question.id)){
        alert("Cannot vote more than once on a question!")
      } else {
        dispatch(handleAnswerQuestion({authedUser: user.id, qid: question.id, answer: optionNum})) }
      }
  }
}

export default connect(null, mapDispatchToProps)(Option)