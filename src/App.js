import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import { AppContainer } from './App.styles';

import { GlobalStyle } from './global.styles';

class App extends Component {
  constructor() {
    super();

    this.state = {
      samples: [],
      searchField: ''
    };    
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ samples: users }))
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value })
  };

  render() {
    const { samples, searchField } = this.state;
    const filteredSamples = samples.filter(sample => 
      sample.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <AppContainer>
        <GlobalStyle />
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList samples={filteredSamples} />
      </AppContainer>
    );
  }
}

export default App;