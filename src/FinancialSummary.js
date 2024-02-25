
import React, { useState } from 'react';

const InvestmentCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [monthlyDeposit, setMonthlyDeposit] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [futureValue, setFutureValue] = useState(0);

  const calculateFutureValue = () => {
  
    setFutureValue(10000); 
  };

  return (
    <div>
      <h3>Kalkulačka pro spoření nebo investice</h3>
      <input type="number" placeholder="Počáteční investice" value={initialInvestment} onChange={(e) => setInitialInvestment(parseFloat(e.target.value))} />
      <input type="number" placeholder="Pravidelný měsíční vklad" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(parseFloat(e.target.value))} />
      <input type="number" placeholder="Úroková sazba (%)" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value))} />
      <input type="number" placeholder="Doba trvání investice (v letech)" value={investmentDuration} onChange={(e) => setInvestmentDuration(parseFloat(e.target.value))} />
      <button onClick={calculateFutureValue}>Spočítat</button>

      <h4>Výsledek</h4>
      <p>Budoucí hodnota: {futureValue}</p>
    </div>
  );
};

export default InvestmentCalculator;
