import React from 'react';

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => {
  return (
    <div className="temperature-input">
      <label> Temperatura en {scale}:</label>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder={`Entrar en ${scale}`}
      />
    </div>
  );
};

export default TemperatureInput;