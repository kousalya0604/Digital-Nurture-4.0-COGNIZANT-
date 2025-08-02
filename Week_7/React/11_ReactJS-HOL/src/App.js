import React from 'react';
import Counter from './Counter';
import SayWelcome from './SayWelcome';
import SyntheticEvent from './SyntheticEvent';
import CurrencyConverter from './CurrencyConverter';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>React Event Handling Examples</h1>
      <Counter />
      <SayWelcome />
      <SyntheticEvent />
      <CurrencyConverter />
    </div>
  );
}

export default App;
