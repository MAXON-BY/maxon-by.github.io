import React, {Component} from 'react'
import PortfolioBlock from '../Components/PortfolioBlock.js'

class Portfolio extends Component{
    render(){
        return(
            <section id="portfolio" className="pfblock">
                <div className="container">

                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <div className="pfblock-header wow fadeInUp">
                                <h2 className="pfblock-title">My works</h2>
                                <div className="pfblock-line"></div>
                                <div className="pfblock-subtitle"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <PortfolioBlock />
                    </div>

                </div>
            </section>
        )
    }
}
export default Portfolio