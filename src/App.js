import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      samples: []
    };
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ samples: users }))
  }

  render() {
    return (
      <div className='App'>
        <CardList>
        {this.state.samples.map(sample => (
          <h1 key={sample.id}>{sample.name}</h1>
        ))}
        </CardList>
      </div>
    );
  }
}

export default App;