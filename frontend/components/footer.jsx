import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer className="lifo-footer-container grid">
                <div className="footer-logo-container">
                    <a href="/"><img src={window.small_lifo} /></a>
                </div>
                <div className="footer-nav grid">
                    <h5 className="footer-nav-title"><a href="/">LIFO Overflow</a></h5>
                    <a className="footer-nav-item" href="/#/questions">Questions</a>
                    <a className="footer-nav-item" href="https://github.com/Bettinapy/LIFO-Overflow" target="_blank" >Source Code</a>
                </div>
                <div className="footer-claim" >Icons made by <a href="http://www.freepik.com/" target="_blank" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" title="Flaticon">www.flaticon.com</a></div>
            </footer>
        )
    }
}

export default Footer;