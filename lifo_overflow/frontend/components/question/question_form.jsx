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

        return(
            <form>
                <div className="question-form-col">
                    <label className="q-label" htmlFor="title">Title</label>
                    <input className="q-input" type="text" value={this.state.title} onChange={this.handleChange('title')}/>
                </div>
                <div className="question-form-col">
                    <label className="q-label" htmlFor="body">Body</label>
                    <input className="q-input" type="text" value={this.state.body} onChange={this.handleChange('body')}/>
                </div>
                <button className="button">Post your question</button>
            </form>
        )
    }
}

export default QuestionForm;