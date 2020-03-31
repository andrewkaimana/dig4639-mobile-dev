// client/App.js
import React from 'react';
/*
class Card extends React.Component {
  render() {
    return (
    <div className='card'>
      <h2>{this.props.title}</h2>
      {this.props.children}
    </div>)
  }
}*/
class Card extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      periods: []
    }
  }

componentDidMount() {
  fetch('https://api.weather.gov/gridpoints/MLB/25,69/forecast')
  .then(res => res.json())
  .then((result) => {
    this.setState({
      periods: result.properties.periods
    })
  })
}

render () {
  return (
  <>
    {this.state.periods.map((v) => <Card key={v.number}
    name={v.name}
    temperature={v.temperature}
    temperatureUnit={v.temperatureUnit}
    detailedForecast={v.detailedForecast}
    />)}
    </> )}
}

export default Card