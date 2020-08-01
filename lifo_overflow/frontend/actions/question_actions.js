import * as QuestionAPIUtil from '../utils/question_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";


export const receiveQuestions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export const receiveQuestion = (question) => {
    return {
        type: RECEIVE_QUESTION,
        question
    }
}

export const removeQuestion = (questionId) => {
    return {
        type: REMOVE_QUESTION,
        questionId
    }
}

export const requestQuestions = () => {
    
    return dispatch => {
        return QuestionAPIUtil.fetchQuestions()
            .then((questions) => dispatch(receiveQuestions(questions)))
    }
}
export const requestQuestion = (questionId) => {
    debugger
    return dispatch => {
        return QuestionAPIUtil.fetchQuestion(questionId)
            .then((question) => dispatch(receiveQuestion(question)))
    }
}
export const createQuestion = (question) => {
    return dispatch => {
        return QuestionAPIUtil.createQuestion(question)
            .then((question) => dispatch(receiveQuestion(question)),
                  (response) => dispatch(receiveErrors(response.responseJSON))
                  )
    }
}
export const updateQuestion = (question) => {
    return dispatch => {
        return QuestionAPIUtil.updateQuestion(question)
            .then((question) => dispatch(receiveQuestion(question)),
                  (response) => dispatch(receiveErrors(response.responseJSON))
                  )
    }
}
export const deleteQuestion = (questionId) => {
    return dispatch => {
        return QuestionAPIUtil.deleteQuestion(questionId)
            .then((question) => dispatch(removeQuestion(question.id)))
    }
}