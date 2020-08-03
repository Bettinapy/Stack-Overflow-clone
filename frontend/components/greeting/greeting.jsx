import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    handleToggle(id){
         
        document.getElementById(id).classList.toggle("show")
    }

    handleSearch(e) {
        e.preventDefault();
        document.getElementById("nav-search-hints").classList.add("show")
        document.getElementById("search-input").classList.add("input-border")
    }

    handleMenu(id){
        const items = document.getElementsByClassName('menu-item-effect');
        items[0].classList.remove("menu-item-effect");
        document.getElementById(id).classList.add("menu-item-effect");
    }

    componentWillUnmount() {
   
        document.getElementById("nav-search-hints").classList.remove("show");
        document.getElementById("gear-dropdown-m").classList.remove("show");
    }

    render() {
   
        const leftDropDown = (!this.props.currentUser.id ? (
            <>
                <li onClick={this.handleToggle.bind(this, "gear-dropdown-m")} id="gear-dropdown-btn" className="zero-padding align-center justify-center">
                <i className="fa fa-bars fa-lg"></i>
            </li>
            <div id="gear-dropdown-m" className="gear-dropdown-menu-container">
                <ul className="gear-dropdown-menu-top">
                    <li className="menu-home">
                            <Link id="menu-home" to="/" onClick={this.handleMenu.bind(this, "menu-home")} className="item-format list-item-format menu-item-effect">Home</Link>
                    </li>
                    <li>
                        <ul className="gear-dropdown-menu-bottom">
                            <li className="menu-title">
                                    Public
                            </li>
                            <li>
                                <Link id="menu-lifo" to="/questions" onClick={this.handleMenu.bind(this, "menu-lifo")} className="list-item-format item-format-lifo grid">
                                    <i class="fa fa-globe" aria-hidden="true"></i>
                                    <span>LIFO Overflow</span>
                                </Link>
                            </li>
                            <li>
                                <Link id="menu-general" to="" onClick={this.handleMenu.bind(this, "menu-general")} className="list-item-format item-format-general grid">
                                    Users
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            </>
        ) : (<></>));
      
        const otherMenuList = (!this.props.currentUser.id ? (
            <>
            <li>
                <a href="#" className="menu-button">Customers</a>
            </li>
            <li>
                <a href="#" className="menu-button">Use cases</a>
            </li>
            </>
        ) : (<></>));

        const greeting = (this.props.currentUser.id ? (
            <nav className="logged grid align-center full-height">
                <div className="function">
                    <a href="#" className="user-code">
                        <i className="fa fa-qrcode fa-2x" aria-hidden="true"></i>                    
                    </a>
                </div>

                <div className="function top-dropdown-container">
                    <a onClick={this.handleToggle.bind(this, "toggle-dropbtn")} className="top-dropdown" title="More settings">
                        <i className="fa fa-bars fa-2x" ></i>
                    </a>
                    <div className="top-dropbtn" id="toggle-dropbtn">
                        <div className="dropdown-header">
                            <h3>
                                <a href="/">current community</a>
                            </h3>
                        </div>
                        <div className="dropdown-content">
                            <ul className="lifo-local">
                                <li className="grid">
                                    <div className="flex-all-auto">
                                        <a href="#" className="lifo-local-link grid">
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
                            <input onClick={this.handleSearch.bind(this)} id="search-input" autoComplete="off" className="search-bar input-default" name="search" type="text" placeholder="Search…" />
                            <i className="fa fa-search input-search" aria-hidden="true"></i>
                            <div id="nav-search-hints" className="nav-search-box">
                                <div class="search-hints-box grid align-center">
                    
                                    <button className="small-btn session-btn-light button-default">
                                        <Link to="/questions/ask">Ask a question</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {greeting}
                        </div>
                </header>
             
        )
    }
}

export default Greeting;