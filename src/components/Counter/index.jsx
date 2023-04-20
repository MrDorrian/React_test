import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            step: 1
        }
    }

    addCount = () => {
        const {count, step} = this.state;
        this.setState({count: count + step});
    }

    removeCount = () => {
        const {count, step} = this.state;
        this.setState({count: count - step});
    }

    changeStep = ({target: {value}}) => {
        this.setState({step: +value});
    }

    render() {
        const {count, step} = this.state;
        return (
            <>
                <div>
                    <div>Count: {count}</div>
                    <div>Add + {step}</div>
                    <input type="number" onChange={this.changeStep}/>
                </div>
                <button onClick={this.addCount}>Add</button>
                <button onClick={this.removeCount}>Remove</button>
            </>
        );
    }
}

export default Counter;
