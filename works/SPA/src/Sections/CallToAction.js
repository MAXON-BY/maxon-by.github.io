import React, {Component} from 'react';

class CallToAction extends Component{
    render(){
        return(
            <div className="calltoaction">
                <div className="container">

                    <div className="row">

                        <div className="col-md-12 col-lg-12">
                            <h2 className="wow slideInRight" data-wow-delay=".1s">ARE YOU READY TO START?</h2>
                            <div className="calltoaction-decription wow slideInRight" data-wow-delay=".2s">
                                I'm available for freelance projects.
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-12 calltoaction-btn wow slideInRight" data-wow-delay=".3s">
                            <a href="#contact" className="btn btn-lg">Hire Me</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default CallToAction