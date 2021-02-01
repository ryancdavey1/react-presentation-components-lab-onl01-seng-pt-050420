// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
  constructor(props) {
    super(props);
 
    // Initial state here...
    this.state = {
      mood: "happy"
    };
  }
 
  handleClick = () => {
    // Probably do some work to update the state
    if (this.state.mood == "happy") {
      this.setState({
        mood: "sad"
      })
    } else {
      this.setState({
        mood: "happy"
      })
    }

  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}
