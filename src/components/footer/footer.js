import React from "react";
import logoLight from "../../images/logo-light.svg"

import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="/">
                    <img src={logoLight} alt="logo"></img>
                </a>

                <div className="links">
                    <h2 className="title">Features</h2>
                    <ul>
                        <li><a href="/">Link Shortening</a></li>
                        <li><a href="/">Branded Links</a></li>
                        <li><a href="/">Analytics</a></li>
                    </ul>
                </div>
                
                <div className="links">
                    <h2 className="title">Resources</h2>
                    <ul>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Developers</a></li>
                        <li><a href="/">Support</a></li>
                    </ul>
                </div>

                <div className="links">
                    <h2 className="title">Company</h2>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Our Team</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>

                <ul className="social">
                    <li><a href="/"><i className="fa-brands fa-square-facebook"></i></a></li>
                    <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="/"><i className="fa-brands fa-pinterest"></i></a></li>
                    <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer