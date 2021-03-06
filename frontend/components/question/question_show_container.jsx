import { connect } from 'react-redux';
import QuestionShow from './question_show';
import { requestQuestion, deleteQuestion, upVoteQuestion, downVoteQuestion } from '../../actions/question_actions';
import { clearErrors } from '../../actions/session_actions';
import {deleteAnswer, upVoteAnswer, downVoteAnswer} from '../../actions/answer_actions';


const mapStateToProps = (state, ownProps) => {
    const question = state.entities.questions[ownProps.match.params.questionId];
    const currentUserId = (Boolean(state.session.id) ? state.session.id : -1)
    const answers = Object.values(state.entities.answers)
    const users = state.entities.users
  
    return {
        question: question || {title: '', body: '', created_at: '', author_id: 0, votes: 0, upvoterIds:[], downvoterIds:[] },
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
        clearErrors: () => dispatch(clearErrors()),
        upVoteQuestion: (questionId) => dispatch(upVoteQuestion(questionId)),
        downVoteQuestion: (questionId) => dispatch(downVoteQuestion(questionId)),
        upVoteAnswer: (questionId, answerId) => dispatch(upVoteAnswer(questionId, answerId)),
        downVoteAnswer: (questionId, answerId) => dispatch(downVoteAnswer(questionId, answerId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow)