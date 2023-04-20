import './App.css';
import {Component} from "react";
import Calendar from "./components/Calendar";

class App extends Component {
    render() {
        return (
            <>
                <header>
                    <h1>Calendar</h1>
                </header>
                <main>
                    <Calendar/>
                </main>
            </>)
    }
}

export default App;
