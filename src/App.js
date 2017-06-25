import React, { Component } from 'react';
import SearchField from './Components/search-field';
import RecipeView from './Components/recipe-view';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchField />
        <div className="banner container-fluid"></div>
        <RecipeView />
        <div className="banner container-fluid"></div>
        
      </div>
    );
  }
}

export default App;
