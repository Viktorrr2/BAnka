
import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [baseCurrency, setBaseCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertCurrency = () => {
   
    setConvertedAmount(amount); 
  };

  return (
    <div>
      <h3>Převod měn</h3>
      <input type="text" placeholder="Základní měna" value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)} />
      <input type="text" placeholder="Cílová měna" value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)} />
      <input type="number" placeholder="Částka k převodu" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
      <button onClick={convertCurrency}>Převést</button>

      <h4>Výsledek</h4>
      <p>Převedená částka: {convertedAmount} {targetCurrency}</p>
    </div>
  );
};

export default CurrencyConverter;
