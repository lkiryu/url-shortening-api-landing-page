import React from "react";
import logo from "../../images/logo.svg"

import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <a href="/" className="logo">
                    <img src={logo} alt="logo"></img>
                </a>

                <nav>
                    <div className="nav-lists">
                        <ul className="nav-list">
                            <li className="nav-link"><a href="/">Features</a></li>
                            <li className="nav-link"><a href="/">Pricing</a></li>
                            <li className="nav-link"><a href="/">Resources</a></li>
                        </ul>

                        <ul className="nav-list">
                            <li className="nav-link"><a href="/">Login</a></li>
                            <li className="nav-link sign-up"><a href="/">Sign Up</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header