import React, { useState, useEffect } from 'react';
import './App.css';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
        <div className="Clock">{time}</div>
    </div>
  );
}

export default Clock;

