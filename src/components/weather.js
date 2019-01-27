import React, { Component } from "react";

export default class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && (
          <h3>
            Location: {this.props.city}, {this.props.country}
          </h3>
        )}
        {this.props.temperature && (
          <h3>Temperature: {this.props.temperature}</h3>
        )}
        {this.props.humidity && <h3>Humidity: {this.props.humidity}</h3>}
        {this.props.condition && <h3>Condition: {this.props.condition}</h3>}
      </div>
    );
  }
}
