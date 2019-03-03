import React, { Component } from 'react'
import './App.css'
import Header from './component/header'
import Content from './component/body'
import Footer from './component/footer'
import config from './config'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { city: null, weather: null, temp: null, listDate: null }
    this.getWeather = this.getWeather.bind(this)
  }
  componentDidMount() {
    this.getWeather()
  }
  getWeather() {
    let url = 'https://api.openweathermap.org/data/2.5/weather?id=1566083&&APPID=' + config.apiKey
    let self = this
    axios.get(url)
      .then(function (response) {
        let { data } = response
        self.setState({ city: data.name, weather: data.weather[0].description, temp: config.convertKtoC(data.main.temp)})
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render() {
    return (
      <div className="App">
          <Header city={this.state.city} weather={this.state.weather}  temp={this.state.temp}/>
          <Content />
          <Footer />
      </div>
    )
  }
}

export default App
