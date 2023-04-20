import './App.css';
import {Component} from "react";
import {StopWatch} from "./components/StopWatch";

class App extends Component {
    render() {
        return (
            <>
                <header>
                    <h1>Stop Watch</h1>
                </header>
                <main>
                    <StopWatch/>
                </main>
            </>)
    }
}

export default App;
