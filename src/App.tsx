import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import CovidSummary from './components/covid-summary/CovidSummary';

function App() {

  return (
  <Routes>
    <Route path="/" element={<CovidSummary />}></Route>
  </Routes>
  );
}

export default App;
