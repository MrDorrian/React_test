import {Component} from "react";

export class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.intervalId = null;
        this.state = {
            time: new Date(0, 0, 0, 0, 0, 0, 0)
        }
    }

    tick = () => {
        const {time} = this.state;
        time.setSeconds(time.getSeconds() + 1);
        this.setState({time});
    };

    start = () => {
        if (!this.intervalId) {
            this.intervalId = setInterval(this.tick, 1000);
        }
    }
    stop = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    reset = () => {
        this.stop();
        this.setState({time: new Date(0, 0, 0, 0, 0, 0, 0)});
    };

    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        this.stop();
    }

    render() {
        const {time} = this.state
        return (<article>
            <div>This state Count: {time.toLocaleTimeString()}</div>
            <button onClick={() => {
                this.start();
            }}>Start
            </button>
            <button onClick={() => {
                this.stop();
            }}>Stop
            </button>
            <button onClick={() => {
                this.reset();
            }}>Reset
            </button>
        </article>);
    }
}
