import React from 'react';
import QuestionListItem from './question_list_item';

class QuestionList extends React.Component {
    componentDidMount() {
        this.props.requestQuestions();
    }

    render() {
        const questionItems = this.props.questions.map(question => (
            <li key={question.id}>
                <Link to={`/questions/${question.id}`}>{question.title}</Link>
            </li>
        )
        );

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
