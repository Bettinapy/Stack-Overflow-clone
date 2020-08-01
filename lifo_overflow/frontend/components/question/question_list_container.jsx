import { connect } from 'react-redux';
import QuestionList from './question_list';
import { requestQuestions } from '../../actions/question_actions';


const mapStateToProps = state => ({
    questions: Object.values(state.entities.questions),
    errors: state.errors.session.session_error
});

const mapDispatchToProps = dispatch => ({
    requestQuestions: () => dispatch(requestQuestions()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionList);