import { connect } from 'react-redux';
import {createQuestion} from '../../actions/question_actions';
import QuestionForm from './question_form';


const mapStateToProps = (state) => {
    debugger
    return {
        question: { title: '', body: '', author_id: 0 },
        errors: state.errors.session.session_error,
        formType: 'Create Question'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitQuestion: (question) => dispatch(createQuestion(question))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);