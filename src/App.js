import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        name: 'Max',
        lastName: 'Takanyan',
        url: 'https://img.freepik.com/free-vector/cute-bad-cat-wearing-suit-sunglasses-with-baseball-bat-cartoon-icon-illustration-animal-fashion-icon-concept-isolated-flat-cartoon-style_138676-2170.jpg?w=2000',
      },
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
