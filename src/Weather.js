import React, { Component } from 'react'

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
      {this.state.items.map((item) => <p key={item}>{item["main"]}</p>)}
      </div>
    )
  }
}

export default Weather
