import './App.css';
import {Component} from "react";
import {ImageWrapper} from "./components/ImageWrapper";

class App extends Component {
    render() {
        return (
            <>
                <ImageWrapper width={'500px'} height={'700px'}>
                    <img
                        src='https://img3.akspic.ru/previews/6/4/4/1/7/171446/171446-verholaz-chudo_chelovek_pauk_majl_morales-chelovek_pauk-majlz_morales-komiksy_marvel-x750.jpg'
                        alt=""/>
                </ImageWrapper>
            </>)
    }
}

export default App;
