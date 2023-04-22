import './App.css';
import {Component} from "react";
import {FlexContainer} from "./components/FlexContainer";

class App extends Component {
    render() {
        return (
            <>
                <FlexContainer justifyContent={'space-around'} alignItems={'center'}>
                    <div>Test</div>
                    <div>Test</div>
                    <div>Test</div>
                    <div>Test</div>
                    <div>Test</div>
                </FlexContainer>
            </>)
    }
}

export default App;
