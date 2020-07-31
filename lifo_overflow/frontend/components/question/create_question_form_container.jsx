import { connect } from 'react-redux';
import {createQuestion} from '../../actions/question_actions';
import QuestionForm from './question_form';


const mapStateToProps = (state) => {
    return {
        event: { title: '', body: '', author_id: 0 },
        formType: 'Create Question'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitQuestion: (event) => dispatch(createQuestion(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);