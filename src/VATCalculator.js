
import React, { useState } from 'react';

const VATCalculator = () => {
  const [priceWithoutVAT, setPriceWithoutVAT] = useState('');
  const [VATRate, setVATRate] = useState('');
  const [priceWithVAT, setPriceWithVAT] = useState('');

  const calculatePriceWithVAT = () => {
    const VATAmount = (priceWithoutVAT * VATRate) / 100;
    const totalAmount = priceWithoutVAT + VATAmount;
    setPriceWithVAT(totalAmount);
  };

  return (
    <div>
      <h3>Výpočet DPH</h3>
      <input type="number" placeholder="Cena bez DPH" value={priceWithoutVAT} onChange={(e) => setPriceWithoutVAT(parseFloat(e.target.value))} />
      <input type="number" placeholder="Sazba DPH (%)" value={VATRate} onChange={(e) => setVATRate(parseFloat(e.target.value))} />
      <button onClick={calculatePriceWithVAT}>Spočítat</button>

      <h4>Výsledek</h4>
      <p>Cena s DPH: {priceWithVAT}</p>
      <p>Rozdíl: {priceWithVAT - priceWithoutVAT}</p>
    </div>
  );
};

export default VATCalculator;
