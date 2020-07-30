import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    handleToggle(e){
        e.preventDefault();
        document.getElementById("toggle-dropbtn").classList.toggle("show")
    }
    render() {
        
        const leftDropDown = (!this.props.currentUser ? (
            <li id="gear-dropdown-btn" className="p0 ai-center jc-center">
                <i className="fa fa-bars"></i>
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
            <ol className="pl0 overflow-x-auto ml-auto -secondary grid ai-center h100">
                <div className="-item">
                    <a href="#" className="my-profile js-gps-track" data-gps-track="profile_summary.click()">
                        <div className="gravatar-wrapper-24" title="Bettina Zhou"><img src="https://www.gravatar.com/avatar/2c141a9176fc18a598dccb86b7b9b8f3?s=48&amp;d=identicon&amp;r=PG&amp;f=1" alt="" width="24" height="24" className="bar-sm -avatar js-avatar-me" /></div>                        
                        <span className="v-visible-sr">Bettina Zhou</span>
                        {/* <div class="-rep js-header-rep" title="your reputation: 1" aria-hidden="true">1</div>
                        <span class="v-visible-sr">, 1 reputation</span>
                        <div class="-badges">
                        </div> */}
                    </a>
                </div>

                <div className="-item site-switcher-item top-dropdown-container">
                    <a onClick={this.handleToggle.bind(this)} href="" className="-link top-dropdown js-site-switcher-button js-gps-track" data-gps-track="site_switcher.show" aria-label="Site switcher" title="A list of all 177 Stack Exchange sites" role="menuitem" aria-haspopup="true" aria-expanded="false" data-ga="[&quot;top navigation&quot;,&quot;stack exchange click&quot;,null,null,null]">
                        <svg aria-hidden="true" className="svg-icon iconStackExchange" width="18px" height="18px" viewBox="0 0 18 18"><path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2zM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2zm16-7H1v4h16V6z"></path></svg>
                    </a>
                    
                    <div className="top-dropbtn" id="toggle-dropbtn">
                        <div className="header">
                            <h3>
                                <a href="#">current community</a>
                            </h3>
                        </div>
                        <div className="modal-content bg-powder-050">
                            <ul className="current-site">
                                <li className="grid">
                                    <div className="fl1">
                                        <a href="#" className="current-site-link site-link js-gps-track grid gs8 gsx" data-id="1" data-gps-track="site_switcher.click({ item_type:3 })">
                                            <div className="favicon favicon-stackoverflow site-icon grid--cell" title="Stack Overflow"></div>
                                            <span className="grid--cell fl1">
                                                LIFO Overflow
                                            </span>
                                        </a>
                                    </div>
                                    <div className="related-links">
                                        <a href="" className="js-gps-track" data-gps-track="site_switcher.click({ item_type:14 })">help</a>
                                        <a href="" className="js-gps-track" data-gps-track="site_switcher.click({ item_type:6 })">chat</a>
                                        <a onClick={this.props.logout} className="js-gps-track" data-gps-track="site_switcher.click({ item_type:8 })">log out</a>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                 
               
            </ol>
        ) : (
            <nav className="right-nav h100 grid">
                <ul className="grid h100 ai-center">
                    <li>
                        {/* <button className="s-btn-filled s-btn py8"><Link to='/login'>Log in</Link></button> */}
                        <button className="s-btn-filled s-btn py8"><a href="#/login">Log in</a></button>
                    </li>
                    <li>
                        <button className="s-btn-primary s-btn py8"><a href="#/signup" className="session-color">Sign up</a></button>
                    </li>
                </ul>
            </nav>
        ))

        return (
            <header className="main-nav">
                <div className="nav-container ai-center h100">
                    <nav className="left-nav h100">

                        <ul className="h100">
                            {leftDropDown}
                            <li>
                                <a href="#" className="logo"><img src={window.lifooverflow} alt="lifooverflow_logo" /></a>
                            </li>
                        </ul>
                    </nav>
                        <nav className="middle-nav">
                            <ul className="h100">
                                <li>
                                    <a href="#" className="menu-button">Products</a>
                                </li>
                              {otherMenuList}
                                
                            </ul>
                        </nav>
                        <div className="search-nav">
                            <div className="ps-relative">
                                <input className="search-bar" name="q" type="text" placeholder="Search…" />
                                    <i className="fa fa-search input-search" aria-hidden="true"></i>
                            </div>
                        </div>
                        {greeting}
                        </div>
                </header>
             
        )
    }
}

export default Greeting;