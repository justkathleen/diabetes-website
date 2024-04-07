
import './App.css';
import React, { useState, useEffect } from 'react';
import PredictionForm from './predictor/predictionForm.js';
import ModelNotRunning  from './predictor/errorPage/modelNotRunning';
import Navbar from './Navbar';
import About from './About';
import {Route, Routes} from 'react-router-dom';
import Journal from './journal/Journal.js';

function App() {
  const [isServerRunning, setIsServerRunning] = useState(false);

  useEffect(() => {
    checkServerStatus();
  }, []);

  const checkServerStatus = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000"); // Replace with your server's URL
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

  // for navbar


  return (
    <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<About />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/journal" element={<Journal />}></Route>
              <Route path="/predictor" element={ isServerRunning ? <PredictionForm /> : <ModelNotRunning />}></Route>
            </Routes>
          </div>
    </div>
  );
  /*
  return (
    <div className="App">
<PredictionForm></PredictionForm>
    </div>
  );
  */
}

export default App;
