import React, { Component } from "react";
import axios from "axios";

import Titles from "./components/titles";
import Form from "./components/form";
import Weather from "./components/weather";

const api_key = "483115773c8ec8ef227f926ced5a14db";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined
  };

  getWeather = event => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`;
    axios.get(url).then(response => {
      this.setState({
        temperature: response.data.main.temp,
        city: response.data.name,
        country: response.data.sys.country,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          condition={this.state.description}
        />
      </div>
    );
  }
}

export default App;
