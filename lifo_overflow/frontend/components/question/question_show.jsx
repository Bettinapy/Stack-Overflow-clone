import React from 'react';
import { Link } from 'react-router-dom';

class QuestionShow extends React.Component{
    componentDidMount(){
        this.props.requestQuestion(this.props.match.params.questionId);
    }
    render(){
        const userAuth = (this.props.loggedIn ? (
            <div>
                <button><Link to="">Edit Question</Link></button>
                <button onClick={this.props.deleteQuestion(this.props.match.params.questionId)}>Delete Question</button>
            </div>
        ):(<></>))
        return(
            <div>
                <h1>{this.props.question.title}</h1>
                <div className="question-body">
                    <p>{this.props.question.body}</p>
                </div>
                <div>
                    {userAuth}
                </div>
            </div>
        )
    }
}

export default QuestionShow;