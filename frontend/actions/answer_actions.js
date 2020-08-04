import * as AnswerAPIUtil from '../utils/answer_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";
export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";


export const receiveAnswers = ({ anwers, users, question }) => {

    return {
        type: RECEIVE_ANSWERS,
        answers,
        users, 
        question
    }
}

export const receiveAnswer = ({ answer, user, question }) => {

    return {
        type: RECEIVE_ANSWER,
        answer,
        user,
        question
    }
}

export const removeAnswer = (answerId) => {
    return {
        type: REMOVE_ANSWER,
        answerId
    }
}

export const requestAnswers = (questionId) => {

    return dispatch => {
        return AnswerAPIUtil.fetchAnswers(questionId)
            .then((payload) => dispatch(receiveAnswers(payload)))
    }
}
export const requestAnswer = (questionId, answerId) => {

    return dispatch => {

        return AnswerAPIUtil.fetchAnswer(questionId, answerId)
            .then((payload) => dispatch(receiveAnswer(payload)))
    }
}
export const createAnswer = (answer) => {
    return dispatch => {
        return AnswerAPIUtil.createAnswer(answer)
            .then((payload) => dispatch(receiveAnswer(payload)),
                (response) => dispatch(receiveErrors(response.responseJSON))
            )
    }
}
export const updateAnswer = (answer) => {
    return dispatch => {
        return AnswerAPIUtil.updateAnswer(answer)
            .then((payload) => dispatch(receiveAnswer(payload)),
                (response) => dispatch(receiveErrors(response.responseJSON))
            )
    }
}
export const deleteAnswer = (questionId, answerId) => {
    return dispatch => {
        return AnswerAPIUtil.deleteAnswer(questionId, answerId)
            .then(() => dispatch(removeAnswer(answerId)))
    }
}