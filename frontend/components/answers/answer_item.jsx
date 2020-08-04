import React from 'react';
import { Link } from 'react-router-dom';

class AnswerItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.answer;
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        const choice = confirm("Delete this answer?");
        if (choice === true) {
            this.props.deleteAnswer(this.props.answer.question_id, this.props.answer.id)
                // .then(() => {
                //    
                //     return (this.props.history.push(`/questions/${this.props.match.params.questionId}`))
                // });
        }

    }
    render() {
        const answerUserAuth = (this.props.currentUserId === this.props.answer.author_id ? (
            <>
                <button><Link to={`/answers/${this.props.answer.id}/edit`} className="small-link">edit</Link></button>
                <button onClick={this.handleDelete}><a className="small-link">delete</a></button>
            </>
        ) : (<></>));

        return (
            <li className="show-body-box">
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
           </li>
        )
    }
}

export default AnswerItem;