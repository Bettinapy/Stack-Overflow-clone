import { connect } from 'react-redux';
import QuestionShow from './question_show';
import { requestQuestion, deleteQuestion } from '../../actions/question_actions';
import { clearErrors } from '../../actions/session_actions';
import {deleteAnswer} from '../../actions/answer_actions';


const mapStateToProps = (state, ownProps) => {
    const question = state.entities.questions[ownProps.match.params.questionId];
    // const user = (question ? state.entities.users[question.author_id] : { id: 0, display_name: '' });
    const currentUserId = (Boolean(state.session.id) ? state.session.id : -1)
    const answers = Object.values(state.entities.answers)
    const users = state.entities.users
    debugger
    return {
        question: question || {title: '', body: '', created_at: '', author_id:0},
        currentUserId: currentUserId,
        users: users || {},
        answers: answers || []
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        requestQuestion: (questionId) => dispatch(requestQuestion(questionId)),
        deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
        deleteAnswer: (questionId, answerId) => dispatch(deleteAnswer(questionId, answerId)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow)