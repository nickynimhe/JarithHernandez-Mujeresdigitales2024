import React from 'react';
import './styles/App.css';
import TemperatureCalculator from './components/TemperatureCalculator'; // If TemperatureCalculator is in the 'components' folder
function App() {
  return (
    <div className="App">
      <TemperatureCalculator />
    </div>
  );
}

export default App;