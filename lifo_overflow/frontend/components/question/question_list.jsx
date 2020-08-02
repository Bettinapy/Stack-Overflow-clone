import React from 'react';
import QuestionListItem from './question_list_item';
import { Link } from 'react-router-dom';

class QuestionList extends React.Component {
    componentDidMount() {
        this.props.requestQuestions();
    }

    render() {
       
        debugger
        const questionItems = (this.props.questions.length !== 0 ? (this.props.questions.map(question => (
            <li key={question.id}>
                <Link to={`/questions/${question.id}`}>{question.title}</Link>
                <div>
                    {this.props.users[question.author_id].display_name}
                </div>
            </li>
        ))) : (<></>));

        return (
            <div>

                <ul className="question-list">
                    {questionItems}
                </ul>
            </div>
        );
    }
}

export default QuestionList;
