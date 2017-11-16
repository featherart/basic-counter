import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleIncrement() {
    let count = this.state.count + 1;
    this.setState({count});
  }

  handleDecrement() {
    let count = this.state.count - 1;
    this.setState({count});
  }

  handleReset() {
    this.setState({count: 0});
  }

  render() {
    return (
      <section className="Counter">
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.handleIncrement()}>Increment</button>
        <button onClick={() => this.handleDecrement()}>Decrement</button>
        <button onClick={() => this.handleReset()}>Reset</button>
      </section>
    );
  }
}
