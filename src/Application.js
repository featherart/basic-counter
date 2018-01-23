import React, { Component } from 'react';
import CounterContainer from './CounterContainer';

export default class Application extends Component {
  render() {
    return (
      <main className="Application">
        <CounterContainer />
      </main>
    );
  }
}
