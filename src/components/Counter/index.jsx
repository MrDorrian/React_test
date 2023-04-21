import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            step: 1,
            isAdd: true
        }
    }

    countFunc = () => {
        const {count, step, checkbox} = this.state;
        if (checkbox) {
            this.setState({count: count + step});
        } else {
            this.setState({count: count - step});
        }
    }

    changeStep = ({target: {value}}) => {
        this.setState({step: +value});
    }

    changeCheckbox = ({target: {checked}}) => {
        this.setState({isAdd: checked});
    }

    render() {
        const {count, step, isAdd} = this.state;
        return (
            <>
                <div>
                    <div>Count: {count}</div>
                    <div>Add + {step}</div>
                    <input type="number" onChange={this.changeStep}/>
                </div>
                <div>
                    Add/Remove
                    <input type="checkbox" checked={isAdd} onChange={this.changeCheckbox}/>
                </div>
                <button onClick={this.countFunc}>Add</button>
            </>
        );
    }
}

export default Counter;
