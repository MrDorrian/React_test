import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import { TodoPage } from './pages/todo';
import { SignIn } from "./pages/SignIn";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
      </Routes>
    </BrowserRouter>
  );
};
