import React from 'react';
import { Link } from 'react-router-dom';
class QuestionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(id) {   
        document.getElementById(id).classList.add("input-border")
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitQuestion(this.state)
            .then((action)=>{
                return(this.props.history.push(`/questions/${action.question.id}`))
                });
    }
    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }
    
    componentWillUnmount() {
        this.props.clearErrors();
    }

    render(){

        const createQuestionTitle = (this.props.formType==='Create Question' ? (
            <div className="question-form-header-container">
                <h1 className="question-form-header">Ask a public question</h1>
            </div>
        ):(<></>))
        const titleErrors = (this.props.errors.title ? (
            <p className="q-input-error-message ">{this.props.errors.title}</p>
        ) : (<></>));

        const hasTitleError = (this.props.errors.title ? (
            "has-title-error"
        ) : (""));

        const bodyErrors = (this.props.errors.body ? (
            <p className="q-input-error-message ">{this.props.errors.body}</p>
        ) : (<></>));

        const hasBodyError = (this.props.errors.body ? (
            "has-body-error"
        ) : (""));

        const submitBtn = (this.props.formType==='Create Question' ? (
            <button className="button session-btn-heavy button-default" onClick={this.handleSubmit}>Post your question</button>
        ):(
            <>
            <button className="button session-btn-heavy button-default" onClick={this.handleSubmit}>Save Edits</button>
            <Link className="cancel-link" to={`/questions/${this.props.question.id}`}>Cancel</Link>
            </>
        ))
        
        return(
            <div className="question-form-container">
                {createQuestionTitle}
                <form>
                <div className="question-form-box">
                        <div className={`question-form-col grid ${hasTitleError}`}>
                        <label className="q-label" htmlFor="title">
                                Title
                            <p class="q-label-description">Be specific and imagine you’re asking a question to another person</p>
                        </label>
                        <input id="q-title" onClick={this.handleInput.bind(this,"q-title")} className="q-input input-default" placeholder="e.g. How to reset the state of a Redux store?" type="text" value={this.state.title} onChange={this.handleChange('title')}/>
                        {titleErrors}
                    </div>
                    <div className={`question-form-col grid ${hasBodyError}`}>
                        <label className="q-label" htmlFor="body">
                                Body
                            <p class="q-label-description">Include all the information someone would need to answer your question</p>
                        </label>
                            <textarea id="q-body" onClick={this.handleInput.bind(this,"q-body")} className="q-input q-input-textarea input-default" type="text" value={this.state.body} onChange={this.handleChange('body')}/>
                        {bodyErrors}
                    </div>
                </div>
                <div className="question-btn-container">
                    {submitBtn}
                </div>
                </form>
            </div>
        )
    }
}

export default QuestionForm;