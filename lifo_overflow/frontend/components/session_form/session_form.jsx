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
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.history.push('/'), () => { });
        this.setState({ display_name: '', email:'', password: '' })
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    render() {
        const header = (this.props.formType === "signup" ? (
            <h1>Sign up</h1>
        ) : (
                <h1>Log in</h1>
            ));
        const displayName = (this.props.formType === "signup" ? (
            <>
            <label htmlFor="display_name">Display name</label>
            <input type="text" onChange={this.handleInput("display_name")} value={this.state.display_name} />
            </>
        ) : (<> </>))

        const displayNameError = (this.props.errors.display_name ? (
            <p className="error-msg">{this.props.errors.display_name}</p>
        ) : (<></>));

        const emailError = (this.props.errors.email ? (
            <p className="error-msg">{this.props.errors.email}</p>
        ) : (<></>));

        const passwordError = (this.props.errors.password ? (
            <p className="error-msg">{this.props.errors.password}</p>
        ) : (<></>));

        const reminder = (this.props.formType === "signup" ? (
            <p className="session-reminder">Already have an account? <Link to='/login'>Log in</Link></p>
        ) : (
                <p className="session-reminder">Don’t have an account? <Link to='/signup'>Sign up</Link></p>
            ));
     
        return (
            <div className="session-form">
                {header}
                <div>
                    {displayName}
                    {displayNameError}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={this.handleInput("email")} value={this.state.email} />
                    {emailError}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={this.handleInput("password")} value={this.state.password} />
                    {passwordError}
                    <p className="password-hint">Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
                </div>

                <button onClick={this.handleSubmit}>{header}</button>
                <div className="js-terms">
                    By clicking “Sign up”, you agree to our 
                    <a href="https://stackoverflow.com/legal/terms-of-service/public" target="_blank" className="-link">terms of service</a>, 
                    <a href="https://stackoverflow.com/legal/privacy-policy" target="_blank" className="-link"> privacy policy</a> and 
                    <a href="https://stackoverflow.com/legal/cookie-policy" target="_blank" className="-link"> cookie policy</a>
                </div>
                {reminder}
            </div >
        )
    }
}

export default SessionForm;