import React from 'react';
import { Link } from 'react-router-dom';

class AnswerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.answer;
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleUpVote(e) {
        e.preventDefault();
        const downVoteBtn = document.getElementById('down-vote-btn-'+this.props.answer.id)
        if (downVoteBtn.classList.contains("vote-icon-effect")) {
            alert('Please cancel your down-vote first!')
        } else {

            if (this.props.currentUserId !== -1) {
                document.getElementById('up-vote-btn-' + this.props.answer.id).classList.toggle("vote-icon-effect");
                this.props.upVoteAnswer(this.props.answer.question_id, this.props.answer.id)
            } else {
                alert('You must log in or sign up to vote!')
            }
        }
    }

    handleDownVote(e) {
        e.preventDefault();
        const upVoteBtn = document.getElementById('up-vote-btn-' + this.props.answer.id)
        if (upVoteBtn.classList.contains("vote-icon-effect")) {
            alert('Please cancel your up-vote first!')
        } else {

            if (this.props.currentUserId !== -1) {
                document.getElementById('down-vote-btn-' + this.props.answer.id).classList.toggle("vote-icon-effect");
                this.props.downVoteAnswer(this.props.answer.question_id, this.props.answer.id)
            } else {
                alert('You must log in or sign up to vote!')
            }
        }
    }

    handleDelete(e) {
        e.preventDefault();
        const choice = confirm("Delete this answer?");
        if (choice === true) {
            this.props.deleteAnswer(this.props.answer.question_id, this.props.answer.id)
        }
    }

    render() {
        const answerUserAuth = (this.props.currentUserId === this.props.answer.author_id ? (
            <>
                <button><Link to={`/answers/${this.props.answer.id}/edit`} className="small-link">edit</Link></button>
                <button onClick={this.handleDelete}><a className="small-link">delete</a></button>
            </>
        ) : (<></>));
        
        const upVoteId = (typeof this.props.answer.id !== 'undefined' ? (
            'up-vote-btn-' + this.props.answer.id
        ):(''))

        const downVoteId = (typeof this.props.answer.id !== 'undefined' ? (
            'down-vote-btn-' + this.props.answer.id
        ) : (''))

     
        const prev_up_vote_class = (typeof this.props.answer.upvoterIds !== 'undefined' ? (
            this.props.answer.upvoterIds.includes(this.props.currentUserId) ? (
                "vote-icon-effect"
            ) : ("")
        ) : (""))

        const prev_down_vote_class = (typeof this.props.answer.downvoterIds !== 'undefined' ? (
            this.props.answer.downvoterIds.includes(this.props.currentUserId) ? (
                "vote-icon-effect"
            ) : ("")
        ) : (""))

        return (
            
            <li className="show-body-box grid">
                <div className="vote-item-container">
                    <div className="vote-item-box grid align-center">
                        <div className="vote-box">
                            <button id={upVoteId} onClick={this.handleUpVote.bind(this)} className={`vote-btn ${prev_up_vote_class}`}>
                                <i className="fa fa-caret-up vote-icon fa-4x" aria-hidden="true"></i>
                            </button>
                            <div className="up-vote-hint vote-hint">
                                This answer shows research effort; it is useful and clear
                        </div>
                        </div>
                        <div className="vote-points">
                            {this.props.answer.votes}
                        </div>
                        <div className="vote-box">
                            <button id={downVoteId} className="vote-btn" onClick={this.handleDownVote.bind(this)} className={`vote-btn ${prev_down_vote_class}`}>
                                <i className="fa fa-caret-down vote-icon fa-4x" aria-hidden="true"></i>
                            </button>
                            <div className="down-vote-hint vote-hint">
                                This answer does not show any research effort; it is unclear or not useful
                        </div>
                        </div>
                    </div>
                </div>
                <div className="question-detail-container">

                    <div className="question-body-container">
                        <div className="question-body">
                            <p>{this.props.answer.body}</p>
                        </div>
                    </div>
                    <div className="question-user-container grid">
                        <div className="user-auth">
                            {answerUserAuth}
                        </div>
                        <div className="user-info-box">
                            <div className="question-time-box">
                                asked {this.props.answer.created_at}
                            </div>
                            <div className="author-info">
                                <a>{this.props.user.display_name}</a>
                            </div>
                        </div>
                    </div>
                </div>
           </li>
        )
    }
}

export default AnswerItem;