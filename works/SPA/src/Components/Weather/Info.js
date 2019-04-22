import React from 'react';

const Info = props => (
    <div className="weather__info">
        <div>
        {props.date && <p className="weather__key">Date / Time: <span className="weather__value">{props.date}</span></p>}
        {props.city && props.country && <p className="weather__key">Location: <span className="weather__value">{props.city}, {props.country}</span></p>}
        {props.temp && <p className="weather__key">Temperature: <span className="weather__value">{props.temp}</span></p>}
        {props.humidity && <p className="weather__key">Humidity: <span className="weather__value">{props.humidity}</span></p>}
        {props.description && <p className="weather__key">Descriptions: <span className="weather__value">{props.description}</span></p>}
        {props.error && <p className="weather__error">Attention: {props.error}</p>}
        </div>
    </div>
);


export default Info
