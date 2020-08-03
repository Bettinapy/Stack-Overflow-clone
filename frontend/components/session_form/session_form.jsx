import React from 'react';
import { Link } from 'react-router-dom';
class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display_name: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();  
        const user =  {display_name: this.state.display_name, email: this.state.email, password: this.state.password}
   
        // const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push('/questions'), () => { });
        this.setState({ display_name: '', email:'', password: '' })
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleError(type) {
    }

   componentWillUnmount(){
       this.props.clearErrors();
   }

    render() {
        const header = (this.props.formType === "signup" ? (
            "Sign up"
        ) : (
                "Log in"
            ));

        const headerLogo = (this.props.formType === "login" ? (
            <div className="small-logo-container">
                <a href="#" className="auto-margin">
                    <img src={window.small_lifo} alt="small_lifo_overflow_logo" className="small-logo"/>
                </a>
            </div>
        ) : (<></>));

        const displayName = (this.props.formType === "signup" ? (
            <>
            <label className="s-label" htmlFor="display_name">Display name</label>
            <div className="grid">
                <input className="s-input" type="text" onChange={this.handleInput("display_name")} value={this.state.display_name} />
            </div>
            </>
        ) : (<> </>))

        const displayNameError = (this.props.errors.display_name ? (
            <p className="s-input-error-message ">{this.props.errors.display_name}</p>
        ) : (<></>));
        
        const hasDNameError = (this.props.errors.display_name ? (
           "has-dname-error"
        ) : (""));

        const emailError = (this.props.errors.email ? (
            <p className="s-input-error-message ">{this.props.errors.email}</p>
        ) : (<></>));

        const hasEmailError = (this.props.errors.email ? (
            "has-email-error"
        ) : (""));

        const passwordError = (this.props.errors.password ? (
            <p className="s-input-error-message ">{this.props.errors.password}</p>
        ) : (<></>));
        
        const hasPasswordError = (this.props.errors.password ? (
            "has-password-error"
        ) : (""));

        const passwordHint = (this.props.formType === "signup" ? (
            <p className="password-hint annotation">Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
        ) : (<></>));

        const reminder = (this.props.formType === "signup" ? (
            <>Already have an account? <Link to='/login'>Log in</Link></>
        ) : (
                <>Don’t have an account? <Link to='/signup'>Sign up</Link></>
            ));
        
        const introStack = (this.props.formType === "signup" ? (
            <div className="intro-container">
                <h1 className="intro-header">Join the LIFO Overflow community</h1>
                <div className="grid join-container">
                    <div className="intro-icon-container">
                        <img src={window.icon_question} className="intro-icon icon-color-blue" />
                    </div>
                    <div>Get unstuck — ask a question</div>
                </div>
                <div className="grid join-container">
                    <div className="intro-icon-container">
                        <img src={window.icon_up_and_down} className="intro-icon icon-color-blue" />
                    </div>
                    <div>Unlock new privileges like voting and commenting</div>
                </div>
                <div className="grid join-container">
                    <div className="intro-icon-container">
                        <img src={window.icon_tag} className="intro-icon icon-color-blue" />
                    </div>
                    <div>Save your favorite tags, filters, and jobs</div>
                </div>
                <div className="grid join-container">
                    <div className="intro-icon-container">
                        <img src={window.icon_trophy} className="intro-icon icon-color-blue" />
                    </div>
                    <div>Earn reputation and badges</div>
                </div>
                <div className="annotation">
                    Use the power of LIFO Overflow inside your organization.
                    <br/>
                    Try a <a href="#" target="_blank">free trial of LIFO Overflow for Teams</a>.   
                </div>
            </div>
        ) : (<> </>))

        const questionAuthWarning = (this.props.location.search === "?question" ? (
            <div className="q-warning-msg">
                <p className="main-warning-msg">You must be logged in to ask a question on LIFO Overflow</p>
                <p>Log in below or <Link to='/signup'>Sign up</Link></p>
            </div>
        ):(<></>));
        
        return (
            <div className="session-container grid align-center">
                {introStack}
                <div className="zero-shrink">
                    {questionAuthWarning}
                    {headerLogo}
                <div className="form-container form-shadow auto-margin">
                    <form className="session-form grid">
                        <div className={`session-col grid ${hasDNameError}`}>
                            {displayName}
                            {displayNameError}
                        </div>

                        <div className={`session-col grid ${hasEmailError}`}>
                            <label className="s-label" htmlFor="email">Email</label>
                            <input className="s-input" type="text" onChange={this.handleInput("email")} value={this.state.email} />
                            {emailError}
                        </div>

                        <div className={`session-col grid ${hasPasswordError}`}>
                            <label className="s-label" htmlFor="password">Password</label>
                            <input className="s-input" type="password" onChange={this.handleInput("password")} value={this.state.password} />
                            {passwordError}
                            {passwordHint}
                        </div>

                        <div className="main-session-button-container grid">
                            <button className="main-session-button button-default session-btn-heavy" onClick={this.handleSubmit}>{header}</button>
                        </div>
                        
                    </form>
                    
                    </div>

                    <div className="auto-margin text-center full-width">
                        {reminder}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default SessionForm;