import { connect } from 'react-redux';
import { createAnswer } from '../../actions/answer_actions';
import AnswerForm from './answer_form';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {

    return {
        answer: state.entities.answers[ownProps.match.params.answerId] || { body: '', author_id: state.session.id },
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

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);