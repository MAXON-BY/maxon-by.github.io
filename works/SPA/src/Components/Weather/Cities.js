import React from "react";

const Cities = (props) => (
    <div className="select-city">
        <span className="select-text">Or select city:</span>
        <div className="flex-div" style={{"display": "flex;", "align-items": "baseline;"}}>
                <span>
                    <form onSubmit={props.getWeather}>
                        <input className="hidden" type="text" name="city" value="Minsk" />
                        <input className="hidden" type="text" name="country" value="BY" />
                        <button>Minsk BY</button>
                    </form>
                </span>
            <span>
                    <form onSubmit={props.getWeather}>
                        <input className="hidden" type="text" name="city" value="Moscow" />
                        <input className="hidden" type="text" name="country" value="RU" />
                        <button>Moscow RU</button>
                    </form>
                </span>
            <span>
                    <form onSubmit={props.getWeather}>
                        <input className="hidden" type="text" name="city" value="Berlin" />
                        <input className="hidden" type="text" name="country" value="DE" />
                        <button>Berlin DE</button>
                    </form>
                </span>
            <span>
                    <form onSubmit={props.getWeather}>
                        <input className="hidden" type="text" name="city" value="New York" />
                        <input className="hidden" type="text" name="country" value="US" />
                        <button>New York US</button>
                    </form>
                </span>
        </div>
    </div>
);

export default Cities
