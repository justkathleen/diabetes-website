
import './App.css';
import React, { useState, useEffect } from 'react';
import PredictionForm from './predictor/predictionForm.js';
import ModelNotRunning  from './predictor/errorPage/modelNotRunning';

function App() {
  const [isServerRunning, setIsServerRunning] = useState(false);

  useEffect(() => {
    checkServerStatus();
  }, []);

  const checkServerStatus = async () => {
    try {
      const response = await fetch("http://localhost:5000"); // Replace with your server's URL
      if (response.ok) {
        setIsServerRunning(true);
      }
      else
      {
        setIsServerRunning(false);
      }
    } catch (error) {
      setIsServerRunning(false);
    }
  };

  return (
    <div className="App">
      {isServerRunning ? <PredictionForm /> : <ModelNotRunning />}
    </div>
  );
}

export default App;
