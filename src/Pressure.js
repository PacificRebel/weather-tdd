import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';


import './Weather.css'

class Pressure extends Component {
  constructor(props) {
    super(props)
    this.state = { weatherItems: [] }
  };

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
          this.setState({weatherItems: data["main"]})
      })
  }

  render() {
    const data = this.state.weatherItems
      // console.log(data)

    return (
      <div className="weather">
            <Card key={data} className="singleItem" style={{ border: "none", boxShadow: "none"}}>
             <CardActionArea>
              <CardContent>
                <Typography>
                  <li id="bloc1">Pressure: </li>
                  <li id="bloc2">{data.pressure}</li>
                  <li id="bloc3"> %</li>
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
      </div>
      )
    }
  }

export default Pressure
