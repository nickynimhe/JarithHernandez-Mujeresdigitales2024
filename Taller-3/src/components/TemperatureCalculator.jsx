import React, { useState, useEffect } from 'react';
import TemperatureInput from './TemperatureInput';
import boil from './imagenes/boil-image.png';
import ice from './imagenes/ice-image.png';
import liquid from './imagenes/liquid-image.png';

const TemperatureCalculator = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [waterState, setWaterState] = useState('');
  const [image, setImage] = useState(null); // State for the image

  useEffect(() => {
    updateWaterState();
  }, [celsius]);

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    setFahrenheit(value !== '' ? ((parseFloat(value) * 9) / 5 + 32).toFixed(2) : '');
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    setCelsius(value !== '' ? ((parseFloat(value) - 32) * 5 / 9).toFixed(2) : '');
  };

  const updateWaterState = () => {
    const temp = parseFloat(celsius);
    if (temp >= 100) {
      setWaterState('El agua herviría.');
      setImage(boil);
    } else if (temp <= 0) {
      setWaterState('El agua se congelaría.');
      setImage(ice);
    } else {
      setWaterState('El agua permanecería líquida.');
      setImage(liquid);
    }
  };

  return (
    <div className="temperature-calculator">
      <h1>CALCULADORA DE TEMPERATURA</h1>
      <TemperatureInput
        scale="Celsius"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="Fahrenheit"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      {waterState && (
        <div className="water-state">
          {waterState}
          {image && <img src={image} alt="Water State" />}
        </div>
      )}
    </div>
  );
};

export default TemperatureCalculator;