import React from 'react';
import { Link } from 'react-router-dom';

class VoteItem extends React.Component {
    handleUpVote(e){
        e.preventDefault();
        const downVoteBtn = document.getElementById("down-vote-btn")
        if (downVoteBtn.classList.contains("vote-icon-effect")){
            alert('Please cancel your down-vote first!')
        }else{

            if(this.props.currentUserId !== -1){
                document.getElementById("up-vote-btn").classList.toggle("vote-icon-effect");
                this.props.upVoteQuestion(this.props.question.id)
            }else{
                alert('You must log in or sign up to vote!')
            }
        }
    }

    handleDownVote(e) {
        e.preventDefault();
        const upVoteBtn = document.getElementById("up-vote-btn")
        if (upVoteBtn.classList.contains("vote-icon-effect")) {
            alert('Please cancel your up-vote first!')
        }else{

            if (this.props.currentUserId !== -1) {
                document.getElementById("down-vote-btn").classList.toggle("vote-icon-effect");
                this.props.downVoteQuestion(this.props.question.id)
            } else {
                alert('You must log in or sign up to vote!')
            }
        }
    }

    render(){
        debugger
        const prev_up_vote_class = (typeof this.props.question.upvoterIds !== 'undefined' ? (
            this.props.question.upvoterIds.includes(this.props.currentUserId) ? (
                "vote-icon-effect"
            ):("")
        ) :(""))

        const prev_down_vote_class = (typeof this.props.question.downvoterIds !== 'undefined' ? (
            this.props.question.downvoterIds.includes(this.props.currentUserId) ? (
                "vote-icon-effect"
            ) : ("")
        ) : (""))

        return(
            <div className="vote-item-container">
                <div className="vote-item-box grid align-center">
                    <div className="vote-box"> 
                        <button id="up-vote-btn" onClick={this.handleUpVote.bind(this)} className={`vote-btn ${prev_up_vote_class}`}>
                            <i className="fa fa-caret-up vote-icon fa-4x" aria-hidden="true"></i>
                        </button>
                        <div className="up-vote-hint vote-hint">
                            This question shows research effort; it is useful and clear
                        </div>
                    </div>
                    <div className="vote-points">
                        {this.props.question.votes}
                    </div>
                    <div className="vote-box">
                        <button id="down-vote-btn" className="vote-btn" onClick={this.handleDownVote.bind(this)} className={`vote-btn ${prev_down_vote_class}`}>
                            <i className="fa fa-caret-down vote-icon fa-4x" aria-hidden="true"></i>
                        </button>
                        <div className="down-vote-hint vote-hint">
                            This question does not show any research effort; it is unclear or not useful
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VoteItem;