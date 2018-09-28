import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormControl, FormGroup, Row, Col, Form, Button } from "react-bootstrap"
import { handleAddQuestion } from '../actions/questions'


class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }


  handleChange = (e, option) => {
    const text = e.target.value

    this.setState((prevState) => ({
      ...prevState,
      [option]: text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state

    this.props.dispatch(handleAddQuestion({author: this.props.authedUser, optionOneText: optionOne, optionTwoText: optionTwo}))
    this.props.history.push("/")
  }

  render () {
    const {optionOne, optionTwo} = this.state
    return (
      <div>
        <h1>New Question</h1>
        <Form inline>
          <FormGroup>
            <Row>
              <Col xs={6}>
                <FormControl rows="4" cols="50" componentClass="textarea" placeholder="Option One" value={optionOne} onChange={(e) => this.handleChange(e, "optionOne")}/>
              </Col>
              <Col xs={1}>
                <h1>OR</h1>
              </Col>
              <Col xs={5}>
                <FormControl rows="4" cols="50" componentClass="textarea" placeholder="Option Two" value={optionTwo} onChange={(e) => this.handleChange(e, "optionTwo")}/>
              </Col>
            </Row>
            <Row className='text-center'>
              <Button onClick={this.handleSubmit} type="submit">Submit</Button>
            </Row>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return { dispatch }
}

function mapStateToProps({authedUser}){
  return { authedUser }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)