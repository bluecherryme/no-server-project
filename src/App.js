import React, { Component } from 'react';
import SearchField from './Components/search-field';
import RecipeView from './Components/recipe-view';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchField />
        <RecipeView />
      </div>
    );
  }
}

export default App;
