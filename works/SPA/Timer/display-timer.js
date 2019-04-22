import React, {Component} from 'react';

class TimerDisplay extends Component {
    render() {
        let timerSec = this.props.timeLeft;
        // if(this.props.timeLeft > 0){
        //     let vid = document.getElementById("play");
        //     vid.play();
        // }

        return (
            <>
                <p>{this.props.timeLeft}</p>
                <div style={{color: '#000'}}>
                    <span>{Math.round(timerSec/60/60)} : </span>
                    <span>{Math.round(timerSec/60)} : </span>
                    <span>{Math.round(timerSec)}</span>
                </div>
                <audio id="play" controls>
                    <source src="media/BonJovi.mp3" type="audio/mpeg" />
                </audio>
            </>
        )

    }
}

export default TimerDisplay;
