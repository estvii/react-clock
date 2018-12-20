import React, { Component } from 'react';
import Clock from "./Clock";
import Moment from 'moment-timezone';

class App extends Component {
    state = { latitude: null, errorMessage: "", value: 1} //class field react
    constructor(props) {
        super(props);
        // this.state = { latitude: null, errorMessage: "" }; //Initializes the state required
        
        
        window.navigator.geolocation.getCurrentPosition( 
            position => {this.setState({ latitude: position.coords.latitude })},
            error => {this.setState({ errorMessage: error.message})}
        );

        // console.log(position);
        const tokyoTime = Moment.tz("Asia/Tokyo").format("hh:mm:ss a");
        console.log(tokyoTime);
        
        
            

    }

    isItWarm() {
        // return true or false depending on month we're in and latitude you've receive
        const { latitude } = this.state;
        if (latitude) {
            const month = new Date().getMonth();   
            if ( 
                (month >= 4 && month <= 9 && latitude > 0 ) 
                || 
                ((month >= 9 || month <=4) && latitude < 0)
                || 
                (latitude === 0)
            ) {
                // console.log('true')
                return true;
            }
                // console.log('false')
        }
    }

    getClockIcon() {
        if(this.isItWarm()) {
            return "sun.svg"
        }
        return "snowflake.svg"
    };

    render() {
        // console.log(this.state);
        const { latitude, errorMessage } = this.state;
        
        return (
                <div>
                    {this.isItWarm()}
                    {/* {this.state.latitude} */}
                    {errorMessage || <Clock 
                        icon={latitude !== null ? this.getClockIcon() : null}
                        timezone={"Sydney/Australia"} 
                        date={new Date()} 
                    />}
                </div>



        );
    }
}

export default App;
