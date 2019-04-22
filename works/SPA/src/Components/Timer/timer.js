import React, { Component } from 'react';
import Button from './btn-timer.js'
import TimerDisplay from './display-timer.js'
import './timer.css';

class Timer extends Component {
    constructor(props){
        super(props);
        this.startTimer = this.startTimer.bind(this);
        this.state = {
            timeLeft: 0, // начальное значение
            timer: null
        }
    }

    startTimer(timeLeft){
        clearInterval(this.state.timer);
        console.log('start');

        let timer = setInterval(()=>{
            var timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0){
                clearInterval(timer)
            }
            this.setState({
                timeLeft: timeLeft
            })

        }, 1000);
        this.setState({timer: timer, timeLeft: timeLeft})
    }

    render() {
        return (
            <div className="App-header timer bg-timer">
                <div className="timerWrap">
                    <div className="timerName">
                        <p><span>Online</span>Timer</p>
                    </div>
                    <div className="timerConfig">
                        <div className="timerConfigBtn">
                            <button className="greenBtn">Play</button>

                            <Button time="10" startTimer={this.startTimer}/>
                            <Button time="15" startTimer={this.startTimer}/>
                            <Button time="20" startTimer={this.startTimer}/>
                            <Button time="30" startTimer={this.startTimer}/>
                            <Button time="45" startTimer={this.startTimer}/>
                            <Button time="120" startTimer={this.startTimer}/>

                            <button className="orangeBtn">Another Time</button>
                        </div>
                        <div className="timerWindow">
                            <TimerDisplay timeLeft={this.state.timeLeft}/>
                            <div className="timerWindowButtons"></div>
                        </div>
                    </div>
                    <audio id="play" controls>
                        <source src="media/BonJovi.mp3" type="audio/mp3" />
                    </audio>
                </div>
            </div>
        );
    }
}
export default Timer;
