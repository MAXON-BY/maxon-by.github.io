import React, {Component} from 'react'
import SkillBlock from './../Components/SkillBlock.js'

class Skills extends Component {
    render() {
        return (
            <section className="pfblock pfblock-gray" id="skills">
                <div className="container">
                    <div className="row skills">

                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                                <div className="pfblock-header wow fadeInUp">
                                    <h2 className="pfblock-title">My Skills</h2>

                                    <div className="pfblock-line"></div>
                                    <div className="pfblock-subtitle">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <SkillBlock />
                    </div>
                </div>
            </section>
        )
    }
}
export default Skills;