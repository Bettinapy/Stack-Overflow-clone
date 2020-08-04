import { connect } from 'react-redux';
import { createAnswer } from '../../actions/answer_actions';
import AnswerForm from './answer_form';
import { clearErrors } from '../../actions/session_actions';
import { withRouter, Redirect } from "react-router";

const mapStateToProps = (state, ownProps) => {
   
    const answer = (typeof state.entities.answers.id === 'undefined' ? (
                !Boolean(state.session.id) ? (
            { body: '', author_id: 0, question_id: ownProps.match.params.questionId }
            ) : (
                { body: '', author_id: state.session.id, question_id: ownProps.match.params.questionId }
            )      
    ) : (
        Object.values(state.entities.answers)[0]
    ))
    
    return {
        answer: answer,
        errors: state.errors.session.session_error || { title: '', body: '' },
        formType: 'Create Answer'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitAnswer: (answer) => dispatch(createAnswer(answer)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnswerForm));