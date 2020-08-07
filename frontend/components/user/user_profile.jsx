import React from 'react';
import SideMenu from '../side_menu';
import Footer from '../footer';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component{
    componentDidMount(){
       
        this.props.fetchUser(this.props.currentUser.id)
    }
    render(){
 
        const questions = (this.props.questions.length !==0 ? (
            this.props.questions.map(question => {
                return(
                <li key={question.id} className="post-list" >
                    <Link to={`/questions/${question.id}`} >{question.title}</Link>
                </li>)
            })
        ):(<></>));
        
        const answers = (this.props.answers.length !== 0 ? (
            this.props.answers.map(answer => {
                return (
                    <li key={answer.id} className="post-list" >
                        <Link to={`/questions/${answer.question_id}`} >{answer.body.substr(0, 25)}</Link>
                    </li>)
            })
        ) : (<></>))
       
        return(
            <div className="whole-box">
                <div className="whole-container grid">
                    <SideMenu />
                    <div className="user-info-container">
                        <div className="user-personal-info grid" >
                            <div className="user-qr-box">
                                <img src={window.headshot} className="user-headshot"/>
                            </div>
                            <div className="user-name-info">
                                <h2>{this.props.currentUser.display_name}</h2>
                                <p>{this.props.currentUser.email}</p>
                            </div>
                        </div>
                        <div className="user-post-box">
                            <div className="user-post-header">
                                <h3>Questions <span>({this.props.questions.length})</span></h3>
                            </div>
                            <ul>
                                {questions}
                            </ul>
                            <div className="user-post-header">
                                <h3>Answers <span>({this.props.answers.length})</span></h3>
                            </div>
                            <ul>
                                {answers}
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default UserProfile;