import React, { Component } from 'react';
import Counter from './Counter'

export default class CounterContainer extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    let count = this.state.count + 1;
    this.setState({count});
  }

  handleDecrement = () => {
    let count = this.state.count - 1;
    this.setState({count});
  }

  handleReset = () => {
    this.setState({count: 0});
  }

  render() {
    const { count } = this.state;
    return (
      <Counter
        count={count}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleReset={this.handleReset}
      />
    );
  }
}// Intentionally left blank.
