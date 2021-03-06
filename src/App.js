import React from 'react';
import './App.css';
import Weather from './Weather';
import Temperature from './Temperature';
import Humidity from './Humidity';
import Location from './Location';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <Grid container spacing={1}>
          <Grid container item xs={12} spacing={2}>
          <Grid item xs={12}>
            <div className="appTitle">
              <h1>Weather</h1>
              </div>
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
            <Location />
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={4}>
            <Temperature />
          </Grid>
          <Grid item xs={4}>
            <Weather />
          </Grid>
          <Grid item xs={4}>
            <Humidity />
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
}

export default App;

// the '4s' of Grid sizes add up to 12 horizontally - can amend their
// their sizes as long as they add up to 12


      //   </Grid>
      //   <Grid container item xs={12} spacing={3}>
      //   </Grid>
      //   <Grid container item xs={12} spacing={3}>
