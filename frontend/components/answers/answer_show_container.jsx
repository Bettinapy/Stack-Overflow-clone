import { connect } from 'react-redux';
import AnswerShow from './answer_show';
import { requestAnswers, deleteAnswer } from '../../actions/answer_actions';
import { clearErrors } from '../../actions/session_actions';
import { withRouter, Redirect } from "react-router";


const mapStateToProps = (state, ownProps) => {
    debugger
    const answers = Object.values(state.entities.answers);
    const currentUserId = (Boolean(state.session.id) ? state.session.id : -1)
    const users = state.entities.users
    return {
        answers: answers || [],
        currentUserId: currentUserId,
        users: users || {}
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        requestAnswers: (questionId) => dispatch(requestAnswers(questionId)),
        deleteAnswer: (questionId, answerId) => dispatch(deleteAnswer(questionId, answerId)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnswerShow))