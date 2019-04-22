import React, {Component} from 'react';
import './Weather.css'
import Titles from './Titles.js'
import Form from './Form.js'
import Info from './Info.js'
import Cities from './Cities.js'

const API_KEY = "d247634481dbb5763c73c6a7aa7260d7";

class Weather extends Component{
    state = {
        temp : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        description : undefined,
        error : undefined
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric`);
        const data = await api_call.json();

        if(city && country){
            console.log(data);
            if(data.cod === '404'){
                this.setState({
                    error: "City not found :("
                })
            }
            else{
                this.setState({
                    temp : data.list[0].main.temp,
                    date : data.list[0].dt_txt,
                    city: data.city.name,
                    country: data.city.country,
                    humidity: data.list[0].main.humidity,
                    description: data.list[0].weather[0].description,
                    error: ""
                })
            }
        } else {
            this.setState({
                date: "",
                temp : undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please, enter the value!"
            })
        }

    };

    render(){
        return(
            <div className="App-header weather bg-weather">
                <div className="weatherWrap">

                    <div className="wrapper">
                        <div className="main">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-5 title-container">
                                        <Titles />
                                    </div>
                                    <div className="col-xs-7 form-container">
                                        <Form getWeather={this.getWeather} />
                                        <Cities getWeather={this.getWeather} />
                                        <Info
                                            date={this.state.date}
                                            temp={this.state.temp}
                                            city={this.state.city}
                                            country={this.state.country}
                                            humidity={this.state.humidity}
                                            description={this.state.description}
                                            error={this.state.error}
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


export default Weather
