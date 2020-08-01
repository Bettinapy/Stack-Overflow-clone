import { connect } from 'react-redux';
import {createQuestion} from '../../actions/question_actions';
import QuestionForm from './question_form';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
   
    return {
        question: state.entities.questions[ownProps.match.params.questionId] || { title: '', body: '', author_id: state.session.id },
        errors: state.errors.session.session_error || { title: '', body: '' },
        formType: 'Create Question'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitQuestion: (question) => dispatch(createQuestion(question)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);