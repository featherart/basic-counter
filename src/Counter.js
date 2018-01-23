import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    const { count, handleIncrement, handleDecrement, handleReset } = this.props;
    return (
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button className='full-width' onClick={handleIncrement}>Increment</button>
        <button className='full-width' onClick={handleDecrement}>Decrement</button>
        <button className='full-width' onClick={handleReset}>Reset</button>
      </section>
    );
  }
}
