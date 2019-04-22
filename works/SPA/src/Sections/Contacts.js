import React, {Component} from 'react'

class Contacts extends Component{
    render(){
        return(
            <section id="contact" className="pfblock" style={{backgroundColor: "#ddddddf0", minHeight: "86vh"}}>
                <div className="container">
                    <div className="row">

                        <div className="col-sm-6 col-sm-offset-3">
                            <div className="pfblock-header">
                                <h2 className="pfblock-title">Contacts</h2>
                                <div className="pfblock-line"></div>
                                <div className="pfblock-subtitle"></div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-sm-6" style={{paddingRight: "25px"}}>
                            <div className="my-photo"><img style={{width: "63%", float: "right"}} src="images/myphoto.jpg" alt="Max Nyrkov" /></div>
                            </div>

                            <div className="col-sm-6" style={{paddingLeft: "25px"}}>
                                <div className="contact-block phone">
                                    <h4>Phone</h4>
                                    <p><a href="tel:+375445340362">+375 44 534-03-62</a></p>
                                </div>
                                <div className="contact-block mail">
                                    <h4>Mail</h4>
                                    <p><a href="mailto:max_on.89@mail.ru">max_on.89@mail.ru</a></p>
                                </div>
                                <div className="contact-block mail">
                                    <h4>Telegram</h4>
                                    <p><a href="https://t.me/nyrkov">@nyrkov</a></p>
                                </div>
                                <div className="contact-block linkid">
                                    <h4>LinkedIn</h4>
                                    <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maxon89/">maxon89</a></p>
                                </div>
                                <div className="contact-block skype">
                                    <h4>Skype</h4>
                                    <p><a href="skype:maxon_by?chat">maxon_by</a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
        )
    }
}
export default Contacts