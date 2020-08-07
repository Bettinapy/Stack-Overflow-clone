import React from 'react';
import {connect} from 'react-redux';
import QuestionForm from './question_form';
import {requestQuestion, updateQuestion} from '../../actions/question_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    
    return {
        question: state.entities.questions[ownProps.match.params.questionId],
        errors: state.errors.session.session_error || {title:'', body:''},
        formType: 'Update Question'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestQuestion: (questionId) => dispatch(requestQuestion(questionId)),
        submitQuestion: (question) => dispatch(updateQuestion(question)),
        clearErrors: () => dispatch(clearErrors())
    }
}



class EditQuestionForm extends React.Component {

    componentDidMount() {
        
        return(this.props.requestQuestion(this.props.match.params.questionId));
    }
    render() {
        
        const { history, match, question, errors, formType, submitQuestion, clearErrors } = this.props;

        if (!question) return null;
        
        return (
            <QuestionForm
                errors={errors}
                question={question}
                formType={formType}
                history={history}
                match={match}
                submitQuestion={submitQuestion}
                clearErrors={clearErrors} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm);

