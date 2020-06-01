import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      samples: []
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.samples.map(sample => (
          <h1 key={sample.id}>{sample.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;