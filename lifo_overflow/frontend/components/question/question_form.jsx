import React from 'react';

class QuestionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitQuestion(this.state);
    }
    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    render(){

        const createQuestionTitle = (this.props.formType==='Create Question' ? (
            <h1 className="question-form-header">Ask a public question</h1>
        ):(<></>))
    
        const titleErrors = (this.props.errors.title ? (
            <p className="q-input-error-message ">{this.props.errors.title}</p>
        ) : (<></>));

        const bodyErrors = (this.props.errors.body ? (
            <p className="q-input-error-message ">{this.props.errors.body}</p>
        ) : (<></>));

        const submitBtn = (this.props.formType==='Create Question' ? (
            <button className="button" onClick={this.handleSubmit}>Post your question</button>
        ):(
            <button className="button" onClick={this.handleSubmit}>Save Edits</button>
        ))
        
        return(
            <div>
                {createQuestionTitle}
                <form>
                    <div className="question-form-col">
                        <label className="q-label" htmlFor="title">Title</label>
                        <input className="q-input" type="text" value={this.state.title} onChange={this.handleChange('title')}/>
                        {titleErrors}
                    </div>
                    <div className="question-form-col">
                        <label className="q-label" htmlFor="body">Body</label>
                        <textarea className="q-input" type="text" value={this.state.body} onChange={this.handleChange('body')}/>
                        {bodyErrors}
                    </div>
                    {submitBtn}
                </form>
            </div>
        )
    }
}

export default QuestionForm;