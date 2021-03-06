import React, {Component} from 'react'

class Stopwatch extends Component {
    state ={
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }
//function that starts or stops the timer depending on the isRunning state
    handleStopWatch = () => {
        this.setState( prevState => ({
            isRunning: !this.state.isRunning //setting the isRunning state to its opposite stop/start
        }));
        if(!this.state.isRunning) {
            this.setState({previousTime: Date.now() })
        }
    }
//function to reset the elapsedTime back to 0
    handleReset = () => {
        this.setState({ elapsedTime: 0 });
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100)
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    tick = () => {
        if(this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
            }));
        }
    }

    render() {
        const seconds = Math.floor(this.state.elapsedTime/1000);
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{seconds}</span>
                <button onClick={this.handleStopWatch}>
                    { this.state.isRunning ? 'stop' : 'start' }
                </button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
export default Stopwatch;