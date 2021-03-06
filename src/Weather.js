import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import './Weather.css'

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
          this.setState({items: data["weather"]})
      })
  }

  render() {
    return (
      <div className="weather">
        {this.state.items.map((item) => {
          return (
            <Card key={item} className="singleItem" style={{ border: "none", boxShadow: "none"}}>
                <CardContent>
                  <Typography>
                    <li id="bloc1">Sky: </li>
                    <li id="bloc2">{item["description"]}</li>
                    <li id="bloc3"> %</li>
                  </Typography>
                </CardContent>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default Weather
