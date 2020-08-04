import React from 'react';
import { Link } from 'react-router-dom';
import SideMenu from '../side_menu';

class QuestionList extends React.Component {
    componentDidMount() {
        this.props.requestQuestions();
    }

    render() {
        debugger
        // const userInfo = (typeof this.props.users[this.props.question.author_id] !== 'undefined' ? (
        //     this.props.users[this.props.question.author_id].display_name
        // ) : (''));

        const questionItems = (this.props.questions.length !== 0 ? (this.props.questions.map(question => (
            <li className="question-info-box grid" key={question.id}>
                <div className="question-info">
                    <h3><Link to={`/questions/${question.id}`}>{question.title}</Link></h3>
                    <div className="question-blurb">
                        {question.body.length <= 200 ? question.body : question.body.substring(0,200) + '...'}
                    </div>
                    <div className="question-user-info-box">
                        <div className="question-time-box">
                            asked {question.created_at}
                        </div>
                        <div className="author-info">
                            <a>{this.props.users[question.author_id].display_name}</a>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </li>
        ))) : (<></>));

        const questionsLength = (this.props.questions.length !==0 ? (
            this.props.questions.length
        ):(<></>))

        return (
            <div className="whole-container grid">
                <SideMenu />
            <div className="question-list-container">
                <div className="question-list-box">
                    <div className="question-list-header-box grid">
                        <h1 className="question-form-header">All Questions</h1>
                        <div className="question-list-btn-container">
                            <button className="session-btn-heavy button-default"><Link to="/questions/ask" className="q-button">Ask Question</Link></button>
                        </div>
                    </div>
                    <div className="question-list-info-box">
                        <div className="question-number-box">
                            {questionsLength} questions
                        </div>
                    </div>
                    
                    <ul className="question-list">
                        {questionItems}
                    </ul>
                    
                </div>
            </div>
            </div>
        );
    }
}

export default QuestionList;
