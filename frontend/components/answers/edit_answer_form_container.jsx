import React from 'react';
import { connect } from 'react-redux';
import AnswerForm from './answer_form';
import { requestAnswer, updateAnswer } from '../../actions/answer_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        answer: state.entities.answers[ownProps.match.params.answerId],
        errors: state.errors.session.session_error || { title: '', body: '' },
        formType: 'Update Answer'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestAnswer: (questionId, answerId) => dispatch(requestAnswer(questionId, answerId)),
        submitAnswer: (answer) => dispatch(updateAnswer(answer)),
        clearErrors: () => dispatch(clearErrors())
    }
}



class EditAnswerForm extends React.Component {

    componentDidMount() {
        debugger
        return (this.props.requestAnswer(this.props.match.params.answerId));
    }
    render() {

        const { history, match, answer, errors, formType, submitAnswer, clearErrors } = this.props;

        if (!answer) return null;

        return (
            <AnswerForm
                errors={errors}
                answer={answer}
                formType={formType}
                history={history}
                match={match}
                submitAnswer={submitAnswer}
                clearErrors={clearErrors} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAnswerForm);

