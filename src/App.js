import React, { Component } from 'react';
import SearchField from './Components/search-field';
import RecipeView from './Components/recipe-view';
import RecipeDetail from './Components/recipe-detail/recipe-detail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchField />
        <div className="banner container-fluid"></div>
        <RecipeView />
        <div className="banner container-fluid"></div>
        <RecipeDetail/>
      </div>
    );
  }
}

export default App;
