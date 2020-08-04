import React from 'react';
import { Link } from 'react-router-dom';
import SideMenu from '../side_menu';
import CreateAnswerFormContainer from '../answers/create_answer_form_container';

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
        const choice = confirm("Delete this post?");
        if (choice === true){
            this.props.deleteQuestion(this.props.match.params.questionId)
                .then(() => {
                   
                    return (this.props.history.push('/'))});
        }
        
    }
    render(){
  
        const userAuth = (this.props.currentUserId === this.props.user.id ? (
            <>
                <button><Link to={`/questions/${this.props.match.params.questionId}/edit`} className="small-link">edit</Link></button>
                <button onClick={this.handleDelete}><a className="small-link">delete</a></button>
            </>
        ):(<></>))
       
        return(
            <div className="whole-container grid">
            <SideMenu />
            <div className="question-show-container" key={this.props.question}>
                
                <div className="question-show-box">
                    <div className="question-show-header-box grid">
                        <h1 className="question-form-header">{this.props.question.title}</h1>
                        <div className="question-show-btn-container">
                            <button className="session-btn-heavy button-default"><Link to="/questions/ask" className="q-button">Ask Question</Link></button>
                        </div>
                    </div>
                    <div className="show-body-box">
                        <div className="question-body-container">
                            <div className="question-body">
                                <p>{this.props.question.body}</p>
                            </div>
                        </div>
                        <div className="question-user-container grid">
                            <div className="user-auth">
                                {userAuth}
                            </div>
                            <div className="user-info-box">
                                <div className="question-time-box">
                                    asked {this.props.question.created_at}
                                </div>
                                <div className="author-info">
                                    <a>{this.props.user.display_name}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CreateAnswerFormContainer />
            </div>
            </div>
        )
    }
}

export default QuestionShow;