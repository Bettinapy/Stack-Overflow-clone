import React from 'react';
import { Link } from 'react-router-dom';
import SideMenu from '../side_menu';
import CreateAnswerFormContainer from '../answers/create_answer_form_container';
import AnswerItem from '../answers/answer_item';
import VoteItem from '../vote_item';


class QuestionShow extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.question;
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount(){
        this.props.requestQuestion(this.props.match.params.questionId);
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
                   
                    return (this.props.history.push('/questions'))});
        }
        
    }
    render(){
        
        const userAuth = (this.props.currentUserId === this.props.question.author_id ? (
            <>
                <button><Link to={`/questions/${this.props.match.params.questionId}/edit`} className="small-link">edit</Link></button>
                <button onClick={this.handleDelete}><a className="small-link">delete</a></button>
            </>
        ):(<></>));
        
        
        const userInfo = (typeof this.props.users[this.props.question.author_id] !== 'undefined' ? (
            this.props.users[this.props.question.author_id].display_name
        ):(''))
        
        const answersHeader = (this.props.answers.length !==0 ?(
            <div className="answers-header">
                <h2>{this.props.answers.length} Answers</h2>
            </div>
        ):(<></>))

        const answers = (this.props.answers.length !== 0 ? (
            this.props.answers.map(answer => {
                return <AnswerItem key={answer.id}
                    currentUserId={this.props.currentUserId}
                    deleteAnswer={this.props.deleteAnswer}
                    upVoteAnswer={this.props.upVoteAnswer}
                    downVoteAnswer={this.props.downVoteAnswer}
                    answer={answer}
                    user={this.props.users[answer.author_id]} />
            })
        ) : (<></>))
       
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
                    <div className="show-body-box grid">

                        <VoteItem 
                         question={this.props.question}
                         upVoteQuestion={this.props.upVoteQuestion}
                         downVoteQuestion={this.props.downVoteQuestion}
                         currentUserId={this.props.currentUserId} />

                        <div className="question-detail-container">
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
                                        <a>{userInfo} </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="answers">
                        {answersHeader}
                        {answers}
                    </ul>
                </div>
                <CreateAnswerFormContainer />
            </div>
            </div>
        )
    }
}

export default QuestionShow;