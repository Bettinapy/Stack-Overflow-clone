import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display_name: "",
            email: "",
            password: ""
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
           
        const errors = ((this.props.errors.length !== 0) ? (
            this.props.errors.map((error, idx) => {
                debugger
                return (
                    <li key={idx}>{error}</li>
                )
            })
        ) : (
                <></>
            ));
     
        return (
            <div className="session-form">
                {header}
                {errors}
                <label htmlFor="display_name">Display name</label>
                <input type="text" onChange={this.handleInput("display_name")} value={this.state.display_name} />
                <label htmlFor="email">Email</label>
                <input type="text" onChange={this.handleInput("email")} value={this.state.email} />
                <label htmlFor="password">Password</label>
                <input type="password" onChange={this.handleInput("password")} value={this.state.password} />
                <p>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
                <button onClick={this.handleSubmit}>{header}</button>
                <div className="js-terms">
                    By clicking “Sign up”, you agree to our
                    <a href="https://stackoverflow.com/legal/terms-of-service/public" target="_blank" className="-link">terms of service</a>, 
                    <a href="https://stackoverflow.com/legal/privacy-policy" target="_blank" className="-link">privacy policy</a> and 
                    <a href="https://stackoverflow.com/legal/cookie-policy" target="_blank" className="-link">cookie policy</a>
                </div>
                
            </div >
        )
    }
}

export default SessionForm;