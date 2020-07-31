import React from 'react';
import {connect} from 'react-redux';
import QuestionForm from './question_form';
import {requestQuestion, updateQuestion} from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        question: state.questions[ownProps.match.params.questionId] || { title: '', body: '', author_id: 0 },
        formType: 'Update Question'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestQuestion: (questionId) => dispatch(requestQuestion(questionId)),
        submitQuestion: (question) => dispatch(updateQuestion(question))
    }
}



class EditQuestionForm extends React.Component {

    componentDidMount() {
        this.props.requestQuestion(this.props.match.params.questionId)
    }
    render() {
        const { question, formType, submitQuestion } = this.props;

        if (!question) return null;
        return (
            <QuestionForm
                question={question}
                formType={formType}
                submitQuestion={submitQuestion} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditQuestionForm);

