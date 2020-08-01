import { connect } from 'react-redux';
import QuestionShow from './question_show';
import { requestQuestion, deleteQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        question: state.entities.questions[ownProps.match.params.questionId],
        loggedIn: Boolean(state.session.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    debugger
    return {
        requestQuestion: (questionId) => dispatch(requestQuestion(questionId)),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow)