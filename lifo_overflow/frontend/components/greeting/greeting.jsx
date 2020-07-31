import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    handleToggle(e){
        e.preventDefault();
        document.getElementById("toggle-dropbtn").classList.toggle("show")
    }
    render() {
        
        const leftDropDown = (!this.props.currentUser ? (
            <li id="gear-dropdown-btn" className="zero-padding align-center justify-center">
                <i className="fa fa-bars fa-lg"></i>
            </li>
        ) : (<></>));

        const otherMenuList = (!this.props.currentUser ? (
            <>
            <li>
                <a href="#" className="menu-button">Customers</a>
            </li>
            <li>
                <a href="#" className="menu-button">Use cases</a>
            </li>
            </>
        ) : (<></>));

        const greeting = (this.props.currentUser ? (
            <nav className="logged grid align-center full-height">
                <div className="function">
                    <a href="#" className="user-code">
                        <i className="fa fa-qrcode fa-2x" aria-hidden="true"></i>                    
                    </a>
                </div>

                <div className="function top-dropdown-container">
                    <a onClick={this.handleToggle.bind(this)} href="" className="top-dropdown" title="More settings">
                        <i className="fa fa-bars fa-2x" ></i>
                    </a>
                    <div className="top-dropbtn" id="toggle-dropbtn">
                        <div className="dropdown-header">
                            <h3>
                                <a href="#">current community</a>
                            </h3>
                        </div>
                        <div className="dropdown-content">
                            <ul className="lifo-local">
                                <li className="grid">
                                    <div className="flex-all-auto">
                                        <a href="#" className="lifo-local-link grid">
                                            {/* <div className="favicon favicon-stackoverflow site-icon grid--cell"></div> */}
                                            <span className="flex-all-auto">
                                                LIFO Overflow
                                            </span>
                                        </a>
                                    </div>
                                    <div className="additional-functions">
                                        <a href="">help</a>
                                        <a href="">chat</a>
                                        <a onClick={this.props.logout}>log out</a>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>            
            </nav>
        ) : (
            <nav className="right-nav full-height grid">
                <ul className="grid full-height align-center">
                    <li>
                        <button className="session-btn-light button-default"><a href="#/login">Log in</a></button>
                    </li>
                    <li>
                        <button className="session-btn-heavy button-default"><a href="#/signup" className="session-color">Sign up</a></button>
                    </li>
                </ul>
            </nav>
        ))

        return (
            <header className="main-nav">
                <div className="nav-container align-center full-height">
                    <nav className="left-nav full-height">

                        <ul className="full-height ">
                            {leftDropDown}
                            <li className="full-height">
                                <a href="#" className="logo full-height margin-auto"><img src={window.lifooverflow} alt="lifooverflow_logo" /></a>
                            </li>
                        </ul>
                    </nav>
                        <nav className="middle-nav">
                            <ul className="full-height">
                                <li>
                                    <a href="#" className="menu-button">Products</a>
                                </li>
                              {otherMenuList}
                                
                            </ul>
                        </nav>
                        <div className="search-nav">
                                <input className="search-bar" name="search" type="text" placeholder="Search…" />
                                <i className="fa fa-search input-search" aria-hidden="true"></i>
                        </div>
                        {greeting}
                        </div>
                </header>
             
        )
    }
}

export default Greeting;