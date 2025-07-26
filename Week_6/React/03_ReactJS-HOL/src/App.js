import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Kousalya"
        school="St. Mary's.High School"
        total={450}
        
      />
    </div>
  );
}

export default App;
