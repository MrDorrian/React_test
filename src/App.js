import './App.css';
import React, { Component } from 'react';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import Calendar from './components/Calendar';
import CounterPage from './pages/Counter';
import UserList from './components/UserList';
import DataProvider from './components/DataProvider';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/provider">Provider</Link>
            </li>
            <li>
              <Link to="/user-list">User-List</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<Calendar />} />
          <Route
            path="/provider"
            element={
              <DataProvider url={'/users.json'}>
                {(state) => {
                  return (
                    <ol>
                      {state.map((u) => (
                        <li key={u.id}>
                          {' '}
                          {u.firstName} {u.lastName}
                        </li>
                      ))}
                    </ol>
                  );
                }}
              </DataProvider>
            }
          ></Route>
          <Route path="/user-list" element={<UserList />} />
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
