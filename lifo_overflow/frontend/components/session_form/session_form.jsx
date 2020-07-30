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
        // debugger
        // const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push('/'), () => { });
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
            <div className="ta-center fs-title mx-auto mb24 mt100">
                <a href="#">
                    <svg aria-hidden="true" className="native svg-icon iconLogoGlyphMd" width="32" height="37" viewBox="0 0 32 37"><path d="M26 33v-9h4v13H0V24h4v9h22z" fill="#BCBBBB"></path><path d="M21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4L13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm14 10.79l.68-2.95-16.1-3.35L7 23l16.1 2.99zM23 30H7v-3h16v3z" fill="#F48024"></path></svg>
                </a>
            </div>
        ) : (<></>));

        const displayName = (this.props.formType === "signup" ? (
            <>
            <label className="grid--cell s-label" htmlFor="display_name">Display name</label>
            <div className="grid ps-relative">
                <input className="s-input" type="text" onChange={this.handleInput("display_name")} value={this.state.display_name} />
            </div>
            </>
        ) : (<> </>))
        // const displayNameError = (this.state.display_name_error ? (
        //     <p className="grid--cell s-input-message js-error-message">{this.state.display_name_error}</p>
        // ) : (<></>));

        // const hasDNameError = (this.state.display_name_error ? (
        //     "has-dname-error"
        // ) : (""));

        const displayNameError = (this.props.errors.display_name ? (
            <p className="grid--cell s-input-message js-error-message">{this.props.errors.display_name}</p>
        ) : (<></>));
        
        const hasDNameError = (this.props.errors.display_name ? (
           "has-dname-error"
        ) : (""));

        const emailError = (this.props.errors.email ? (
            <p className="grid--cell s-input-message js-error-message">{this.props.errors.email}</p>
        ) : (<></>));

        const hasEmailError = (this.props.errors.email ? (
            "has-email-error"
        ) : (""));

        const passwordError = (this.props.errors.password ? (
            <p className="grid--cell s-input-message js-error-message">{this.props.errors.password}</p>
        ) : (<></>));
        
        const hasPasswordError = (this.props.errors.password ? (
            "has-password-error"
        ) : (""));

        const passwordHint = (this.props.formType === "signup" ? (
            <p className="password-hint fs-caption fc-light mt4 mb4">Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
        ) : (<></>));

        const reminder = (this.props.formType === "signup" ? (
            <>Already have an account? <Link to='/login'>Log in</Link></>
        ) : (
                <>Don’t have an account? <Link to='/signup'>Sign up</Link></>
            ));
        
        const introStack = (this.props.formType === "signup" ? (
            <div className="intro-container grid--cell fs-body2 mr48 mb128 wmx4 md:d-none">
                <h1 className="fs-headline1 mb32 lh-xs">Join the LIFO Overflow community</h1>
                <div className="grid mb24">
                    <div className="grid--cell fc-blue-500 mr8">
                        <svg width="26" height="26" className="svg-icon mtn2">
                            <path opacity=".5" d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"></path><path d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"></path>
                        </svg>
                    </div>
                    <div className="grid--cell fs15">Get unstuck — ask a question</div>
                </div>
                <div className="grid mb24">
                    <div className="grid--cell fc-blue-500 mr8">
                        <svg width="26" height="26" className="svg-icon mtn2"><path d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"></path><path opacity=".5" d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"></path></svg>
                    </div>
                    <div className="grid--cell fs15">Unlock new privileges like voting and commenting</div>
                </div>
                <div className="grid mb24">
                    <div className="grid--cell fc-blue-500 mr8">
                        <svg width="26" height="26" className="svg-icon mtn2"><path d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"></path><path opacity=".5" d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"></path></svg>
                    </div>
                    <div className="grid--cell fs15">Save your favorite tags, filters, and jobs</div>
                </div>
                <div className="grid mb24">
                    <div className="grid--cell fc-blue-500 mr8">
                        <svg width="26" height="26" className="svg-icon mtn2"><path d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"></path></svg>
                    </div>
                    <div className="grid--cell fs15">Earn reputation and badges</div>
                </div>
                <div className="fs-body1 fc-light">
                    Use the power of LIFO Overflow inside your organization.
                    <br/>
                    Try a <a href="#" target="_blank">free trial of LIFO Overflow for Teams</a>.   
                </div>
            </div>
        ) : (<> </>))
        
        return (
            <div className="session-container grid ai-center">
                {introStack}
                <div className="fl-shrink0 ">
                    {headerLogo}
                <div className="form-container auth-shadow wmx3 p24 mx-auto bg-white bar-lg">
                    <div className="session-form gsy gs12 fd-column">
                            <div className={`grid fd-column gs4 gsy js-auth-item ${hasDNameError}`}>
                            {displayName}
                            {displayNameError}
                        </div>

                        <div className={`grid fd-column gs4 gsy js-auth-item ${hasEmailError}`}>
                            <label className="grid--cell s-label" htmlFor="email">Email</label>
                            <input className="s-input" type="text" onChange={this.handleInput("email")} value={this.state.email} />
                            {emailError}
                        </div>

                        <div className={`grid fd-column gs4 gsy js-auth-item ${hasPasswordError}`}>
                            <label className="grid--cell s-label" htmlFor="password">Password</label>
                            <input className="s-input" type="password" onChange={this.handleInput("password")} value={this.state.password} />
                            {passwordError}
                            {passwordHint}
                        </div>
                        <div className="grid gs4 gsy fd-column js-auth-item">
                            <button className="s-btn s-btn-primary" onClick={this.handleSubmit}>{header}</button>
                        </div>
                        
                    </div >
                    </div>

                    <div className="mx-auto ta-center fs-body1 pb0 p16 mb24 wmx3 w100">
                        {reminder}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default SessionForm;