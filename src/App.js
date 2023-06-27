
import Clock from './Clock';
import Button from './Button';

import './App.css';

import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const unloadHandler = (event) => {
      event.preventDefault();
      event.returnValue = "Are you sure you want to refresh? Data will be lost.";
    };

    window.addEventListener('beforeunload', unloadHandler);

    return () => {
      window.removeEventListener('beforeunload', unloadHandler);
    };
  }, []);
  return (
    
    <div className="App">
    
      <header className="App-header">
      

        <Clock/>
        <Button/>
      </header>
    </div>
    
  );
}

export default App;
