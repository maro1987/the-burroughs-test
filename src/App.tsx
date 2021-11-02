import React from 'react';
import './App.css';
import { DateSelector } from './components/DateSelector/DateSelector';
import { SalaryTable } from './components/SalaryTable/SalaryTable';

function App() {
  return (
    <div className="App">
      <h1>The Burroughs Test</h1>
      <DateSelector />
      <SalaryTable />
    </div>
  );
}

export default App;
