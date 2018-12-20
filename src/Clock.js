import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
    
    // Syntactical sugar version
    state = {
            seconds: this.props.date.getSeconds(), 
            minutes: this.props.date.getMinutes(), 
            hours: this.props.date.getHours()
        }
    
    // Classic way of doing it
    // constructor(props) {
    //     super(props);
    //     this.state = {seconds: this.props.date.getSeconds(), minutes: this.props.date.getMinutes(), hours: this.props.date.getHours()};    
    // }

    tick() {
        this.setState({
            seconds: new Date().getSeconds(),
            minutes: new Date().getMinutes(),
            hours: new Date().getHours()
        });
    }

    componentDidMount(){
        console.log("mounted");
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
        console.log(this.timerID);
    }

    componentDidUpdate(){
        console.log("update");
    }

    componentWillUnmount(){
        clearInterval(this.timeID);
        console.log("unmounted");
    }

    render() {
        return(
            <div className="container">
            <h3 className="label">{this.props.timezone}</h3>
            <div className="clock-face" style={{ backgroundImage: `url(/${this.props.icon})` }}>
                <div className="clock">
                    <div className="hours-container">
                        <div className="hours" style={{ transform: `rotateZ(${(this.state.hours * 30) + (this.state.minutes / 2)}deg)`}}></div>
                    </div>
                    <div className="minutes-container">
                        <div className="minutes" style={{ transform: `rotateZ(${(this.state.minutes * 6)}deg)`}}></div>
                    </div>
                    <div className="seconds-container">
                            <div className="seconds" style={{ transform: `rotateZ(${(this.state.seconds * 6)}deg)`}}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



// const Clock = (props) => {
//     const seconds = props.date.getSeconds();
//     const minutes = props.date.getMinutes();
//     const hours = props.date.getHours();
    
//     return (
//         <div className="container">
//             <h3 className="label">{props.timezone}</h3>
//             <div className="clock-face" style={{ backgroundImage: `url(/${props.icon})` }}>
//                 <div className="clock">
//                     <div className="hours-container">
//                         <div className="hours" style={{ transform: `rotateZ(${(hours * 30) + (minutes / 2)}deg)`}}></div>
//                     </div>
//                     <div className="minutes-container">
//                         <div className="minutes" style={{ transform: `rotateZ(${(minutes * 6)}deg)`}}></div>
//                     </div>
//                     <div className="seconds-container">
//                         <div className="seconds" style={{ transform: `rotateZ(${(seconds * 6)}deg)`}}></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Clock;