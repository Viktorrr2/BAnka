
import React from 'react';
import  IncomeExpenseTracker  from './IncomeExpenseTracker';
import VATCalculator  from './VATCalculator';
import  CurrencyConverter  from './CurrencyConverter';
import  FinancialSummary  from './FinancialSummary';


const Dashboard = () => {
  return (
    <div class='Hlavní' >
      <h2>Finance</h2>
      <IncomeExpenseTracker />
      <VATCalculator />
      <CurrencyConverter />
      <FinancialSummary />
    </div>
  );
};

export default Dashboard;
