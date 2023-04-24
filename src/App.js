import './App.css';
import { Component } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import UserLoader from './components/UsersLoader';
import Calendar from './components/Calendar';
import Aloha from './components/greeting';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<UserLoader />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/aloha" element={<Aloha />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
