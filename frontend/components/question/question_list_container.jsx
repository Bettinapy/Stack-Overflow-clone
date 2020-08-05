import { connect } from 'react-redux';
import QuestionList from './question_list';
import { requestQuestions } from '../../actions/question_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    const queryString = require('query-string');
    const search = (typeof queryString.parse(ownProps.location.search).q !== 'undefined' ? (
        queryString.parse(ownProps.location.search).q
    ) : (''))
    debugger
    return{
        questions: Object.values(state.entities.questions),
        users: state.entities.users,
        errors: state.errors.session.session_error,
        search: search
}
};

const mapDispatchToProps = dispatch => ({
    requestQuestions: (search) => dispatch(requestQuestions(search)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionList);