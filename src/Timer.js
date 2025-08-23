import React from "react";
import { createRoot } from "react-dom/client";

import './style.css'

class Timer extends React.Component {
    constructor()
    {
        super();
        this.state =
        {
            time: new Date().toLocaleTimeString()
        }
    }
    render()
    {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000);
        return (
            <div>
                <h1 className="timer">Time: {this.state.time}</h1>
            </div>
        )
    }
    
}

export default Timer 