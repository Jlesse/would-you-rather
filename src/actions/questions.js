import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function answerQuestion ({qid, authedUser, answer}) {
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer
  }
}

export function addQuestion(question){
  return {
    type: ADD_QUESTION,
    ...question
  }
}

export function handleAddQuestion(data){
  return (dispatch) => {
    saveQuestion(data)
      .then((question) => {
        return dispatch(addQuestion(question))
      })
  }
}

export function handleAnswerQuestion (data) {
  return(dispatch) => {
    saveQuestionAnswer(data)
      .then(() => dispatch(answerQuestion(data)))
  }
}