import React from 'react';
import './App.css';
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { IncomeExpenses } from './component/IncomeExpenses';
import { History } from './component/History';
import { Transaction } from './component/Transaction';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <History />
        <Transaction />
      </div>
    </div>
  );
}

export default App;
