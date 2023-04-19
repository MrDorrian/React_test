import {Component} from "react";

class Aloha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGreeting: true
        }
    }

    switch = () => {
        const {isGreeting} = this.state;
        this.setState({isGreeting: !isGreeting})
    }

    render() {
        const {isGreeting} = this.state;
        const {name} = this.props;
        return (<div>
            <h1 onClick={this.switch}>
                <span>{isGreeting ? 'Hello' : 'Bye Bye'}</span> {name}</h1>
        </div>);
    }
}

export default Aloha;
