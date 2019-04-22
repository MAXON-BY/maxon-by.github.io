import React, {Component} from 'react'
import DataSkills from '../data/skills.json'

class SkillBlock extends Component{
    render(){
        return(
            <div className="row row-flex">
                {DataSkills.map((skills) =>{
                    return (
                        <div key={skills.id} className="col-sm-6 col-md-2 text-center wow fadeInUp">
                            <img src={skills.img} alt={skills.alt} style={{maxWidth: "100%"}}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default SkillBlock