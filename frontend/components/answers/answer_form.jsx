import React from 'react';
import { Link } from 'react-router-dom';
import SideMenu from '../side_menu';


class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.answer;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(id) {
        document.getElementById(id).classList.add("input-border")
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.submitAnswer(this.state)
        .then((action) => {
            debugger
            return (
                this.props.history.replace(`/questions/${action.question.id}`))
            });
        this.props.clearErrors();
        this.setState({body:''})
    }
    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }



    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        debugger
        const createAnswerTitle = (this.props.formType === 'Create Answer' ? (
            <div className="answer-form-header-container">
                <h2>Your Answer</h2>
            </div>
        ) : (
            <div className="answer-form-header-container">
                <h2>Answer</h2>
            </div>))
        
        const systemErrors = (this.props.errors.invalid ? (
            <div className="system-error-message-box">
                <p className="system-error-message">To answer a question, you must sign up or log in.</p> 
            </div>
        ):(<></>));

        const bodyErrors = (this.props.errors.body ? (
            <p className="q-input-error-message ">{this.props.errors.body}</p>
        ) : (<></>));

        const hasBodyError = (this.props.errors.body ? (
            "has-body-error"
        ) : (""));

        const submitBtn = (this.props.formType === 'Create Answer' ? (
            <button className="button session-btn-heavy button-default" onClick={this.handleSubmit}>Post Your Answer</button>
        ) : (
                <>
                    <button className="button session-btn-heavy button-default" onClick={this.handleSubmit}>Save Edits</button>
                    <Link className="cancel-link" to={`/questions/${this.props.answer.question_id}`}>Cancel</Link>
                </>
            ))
        
        const editContainer = (this.props.formType === 'Update Answer' ? (
            'edit-answer-container grid'
        ):(''));

        const editFormat = (this.props.formType === 'Update Answer' ? (
            <SideMenu />
        ):(''))

        const editFormContainer = (this.props.formType === 'Update Answer' ? (
            'edit-form-container'
        ):(''))

        return (
            <div className={`${editContainer}`} >
                {editFormat}

                <form className={`${editFormContainer}`}>
                    {createAnswerTitle}
                <div className={`question-form-col grid ${hasBodyError}`}>
                    <textarea id="q-body" onClick={this.handleInput.bind(this, "q-body")} className="q-input q-input-textarea input-default" type="text" value={this.state.body} onChange={this.handleChange('body')} />
                    {bodyErrors}
                </div>
                <div className="question-btn-container">
                    {submitBtn}
                </div>
                </form>
                {systemErrors}
            </div>
        )
    }
}

export default AnswerForm;