import React from 'react';
import { Link } from 'react-router-dom';

class SideMenu extends React.Component{
    handleMenu(id) {
        const items = document.getElementsByClassName('menu-item-effect');
        items[0].classList.remove("menu-item-effect");
        document.getElementById(id).classList.add("menu-item-effect");
    }

    render(){
        return(
            <div className="side-menu-container">
                <ul className="side-menu-top">
                    <li className="menu-home">
                        <Link id="menu-home" to="/" onClick={this.handleMenu.bind(this, "menu-home")} className="item-format list-item-format">Home</Link>
                    </li>
                    <li>
                        <ul className="side-menu-bottom">
                            <li className="menu-title">
                                Public
                            </li>
                            <li>
                                <Link id="menu-lifo" to="/questions" onClick={this.handleMenu.bind(this, "menu-lifo")} className="list-item-format item-format-lifo grid menu-item-effect">
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
        )
    }
}

export default SideMenu;