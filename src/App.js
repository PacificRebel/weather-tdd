import React from 'react';
import './App.css';
import Weather from './Weather';

console.log(process.env.REACT_APP_WEATHER_API_KEY)

function App() {
  return (
    <div className="App">
      Weather app
      <Weather />
    </div>
  );
}

export default App;
