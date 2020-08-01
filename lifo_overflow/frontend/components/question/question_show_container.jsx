import { connect } from 'react-redux';
import QuestionShow from './question_show';
import { requestQuestion, deleteQuestion } from '../../actions/question_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    
    return {
        question: state.entities.questions[ownProps.match.params.questionId] || {title: '', body: ''},
        loggedIn: Boolean(state.session.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        requestQuestion: (questionId) => dispatch(requestQuestion(questionId)),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow)