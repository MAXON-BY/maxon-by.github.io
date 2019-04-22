import React, {Component} from 'react'
import WorksData from "../data/portfolio.json"

class PortfolioBlock extends Component{
    render(){
        return(
            <div className="row">
                {WorksData.map((works) => {
                    return(
                        <div key={works.id} className="col-xs-12 col-sm-4 col-md-4">
                            <div className="grid wow zoomIn">
                                <figure className="effect-bubba">
                                    <img src={works.img} alt={works.alt}/>
                                    <figcaption>
                                        <h2>{works.name}</h2>
                                        <p><a target="_blank"  rel="noopener noreferrer" href={works.link}>Link</a></p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default PortfolioBlock