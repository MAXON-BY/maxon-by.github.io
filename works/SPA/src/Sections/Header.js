import React, { Component } from 'react';
import Logo from './../frontend.svg';


class Header extends Component {
    render() {
        return (
            <section id="home" className="pfblock-image screen-height">
                <div className="home-overlay"></div>
                <div className="intro">
                    <div className="start">Hello, my name is Max Nyrkov and I am</div>
                    <div className="front">
                        <h1 className="hidden">FrontEnd Developer</h1>
                        <img src={Logo} alt="Max Nyrkov - Drontend Developer" />
                    </div>
                    <div className="start">creating modern and responsive Web Application</div>
                </div>

            </section>
        );
    }
}

export default Header;