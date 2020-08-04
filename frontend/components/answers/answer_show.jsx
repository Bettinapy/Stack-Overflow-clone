import React from 'react';
import { Link } from 'react-router-dom';
import AnswerItem from './answer_item'

class AnswerShow extends React.Component {
    componentDidMount() {
        this.props.requestAnswers(this.props.match.params.questionId);

    }

    componentWillUnmount() {
        this.props.clearErrors();
    }
    render() {
        debugger
        const answers = (this.props.answers.length !== 0 ? (
            this.props.answers.map(answer => {
                return <AnswerItem key={answer.id} 
                        currentUserId={this.props.currentUserId}
                        deleteAnswer={this.props.deleteAnswer}
                        answer={answer}  
                        user={this.props.users[answer.author_id]} />
            })
        ):(<></>))

        return (
            <ul>
                {answers}
            </ul>
        )
    }
}

export default AnswerShow;