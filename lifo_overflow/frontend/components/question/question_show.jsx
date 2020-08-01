import React from 'react';
import { Link } from 'react-router-dom';

class QuestionShow extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.question;
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount(){
        this.props.requestQuestion(this.props.match.params.questionId);
        // this.setState({ title: this.props.question.title });
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleDelete(e){
        e.preventDefault();
       
        this.props.deleteQuestion(this.props.match.params.questionId)
            .then(() => {
               
                return (this.props.history.push('/'))});
        
    }
    render(){
        
        const userAuth = (this.props.loggedIn ? (
            <div>
                <button><Link to={`/questions/${this.props.match.params.questionId}/edit`}>Edit Question</Link></button>
                <button onClick={this.handleDelete}>>Delete Question</button>
            </div>
        ):(<></>))
        
        return(
            <div key={this.props.question}>
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