import React, {Component} from 'react';

class Navigation extends Component{
    render(){
        return(
            <header className="header hidden">
                <nav className="navbar navbar-custom" role="navigation">
                    <div className="container">

                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html">Max Nyrkov</a>
                        </div>

                        <div className="collapse navbar-collapse" id="custom-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#portfolio">Works</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#testimonials">Testimonials</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
        )
    }
}

export default Navigation;
