
import React, { useState } from 'react';

const IncomeExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({ income: '', amount: '', expenditure: '' });

  const addTransaction = () => {
    setTransactions([...transactions, newTransaction]);
    setNewTransaction({ income: '', amount: '', expenditure: '' });
  };

  return (
    <div>
      <h3>Sledování příjmů a výdajů</h3>
      <input type="number" placeholder="Přijem" value={newTransaction.income} onChange={(e) => setNewTransaction({ ...newTransaction, income: e.target.value })} />
      <input type="number" placeholder="Vydaj" value={newTransaction.amount} onChange={(e) => setNewTransaction({ ...newTransaction, amount: parseFloat(e.target.value) })} />
      <input type="number" placeholder="Častka" value={newTransaction.expenditure} onChange={(e) => setNewTransaction({ ...newTransaction, expenditure: e.target.value })} />
      <button onClick={addTransaction}>Přidat</button>

      
      <table>
        <thead>
          <tr>
            <th>Přijem</th>
            <th>Výdaj</th>
            <th>Částka</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.income}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.expenditure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeExpenseTracker;
