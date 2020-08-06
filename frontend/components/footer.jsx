import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer className="lifo-footer-container grid">
                <div className="footer-logo-container">
                    <a href="/"><img src={window.small_lifo} /></a>
                </div>
                <div className="footer-nav">
                    <h5 className="footer-nav-title"><a href="/">LIFO Overflow</a></h5>
                    <a className="footer-nav-item" href="/#/questions">Questions</a>
                </div>
                <div className="footer-claim" >Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>
        )
    }
}

export default Footer;