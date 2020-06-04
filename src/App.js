import React, { Component } from 'react';

import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homePage/homepage.component';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import { AppContainer } from './App.styles';

import { GlobalStyle } from './global.styles';

import Page1 from './pages/page1/linked-page1.component';

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

    const Page = () => (
      <div>
        <h1>Page 1</h1>
      </div>
    );

    return (
      <AppContainer>
        <GlobalStyle />

        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList samples={filteredSamples} />
        {/* <HomePage /> */}

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/page' component={Page1} />
        </Switch> 

      </AppContainer>
    );
  }
}

export default App;