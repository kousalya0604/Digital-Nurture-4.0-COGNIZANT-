import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const euroValue = (parseFloat(rupees) / 90).toFixed(2); // Example: 1 Euro = 90 INR
    setEuro(euroValue);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h3>Currency Converter (INR to Euro)</h3>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter INR"
      />
      <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>Convert</button>
      {euro && <p>Euro: €{euro}</p>}
    </div>
  );
}

export default CurrencyConverter;
