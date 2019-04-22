import React, {Component} from 'react'

class Services extends Component{
    render(){
        return(
            <section id="services" className="pfblock pfblock-gray" style={{display: "none"}}>
                <div className="container">

                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <div className="pfblock-header wow fadeInUp">
                                <h2 className="pfblock-title">This is what I do</h2>
                                <div className="pfblock-line"></div>
                                <div className="pfblock-subtitle">
                                    No one lights a lamp in order to hide it behind the door: the purpose of light is to create more light, to open people’s eyes, to reveal the marvels around.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <div className="iconbox wow slideInLeft">
                                <div className="iconbox-icon">
                                    <span className="icon-magic-wand"></span>
                                </div>
                                <div className="iconbox-text">
                                    <h3 className="iconbox-title">Web Design</h3>
                                    <div className="iconbox-desc">
                                        Good things come to those who wait, but only the things left by those who hustle
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="iconbox wow slideInLeft">
                                <div className="iconbox-icon">
                                    <span className="icon-puzzle"></span>
                                </div>
                                <div className="iconbox-text">
                                    <h3 className="iconbox-title">Web Programming</h3>
                                    <div className="iconbox-desc">
                                        Good things come to those who wait, but only the things left by those who hustle
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="iconbox wow slideInRight">
                                <div className="iconbox-icon">
                                    <span className="icon-badge"></span>
                                </div>
                                <div className="iconbox-text">
                                    <h3 className="iconbox-title">Branding</h3>
                                    <div className="iconbox-desc">
                                        Good things come to those who wait, but only the things left by those who hustle
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="iconbox wow slideInRight">
                                <div className="iconbox-icon">
                                    <span className="icon-question"></span>
                                </div>
                                <div className="iconbox-text">
                                    <h3 className="iconbox-title">Consultation</h3>
                                    <div className="iconbox-desc">
                                        Good things come to those who wait, but only the things left by those who hustle
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Services