import './App.css';
import { Navigation } from './nav';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
      </Routes>
    </BrowserRouter>
  );
};
