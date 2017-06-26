import React, { Component } from 'react';
import SearchField from './Components/search-field';
import RecipeView from './Components/recipe-view';
import RecipeDetail from './Components/recipe-detail/recipe-detail';
import './App.css';
import 'animate.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchField />
        <div className="banner container-fluid text-center">
            <marquee
            direction="left"
            loop="7"
            scrollamount="1"
            scrolldelay="2"
            behavior="alternate"
            width="60%"
            bgcolor="#ff3424"><h1>- Bon Appetit! - Guten Appetit - Enjoy your meal! - </h1>
            </marquee>
  
        </div>
        <RecipeView />
        <div className="banner container-fluid"></div>
        <RecipeDetail/>
        <div className="banner container-fluid">
            <marquee
            direction="left"
            loop="7"
            scrollamount="1"
            scrolldelay="2"
            behavior="alternate"
            width="60%"
            bgcolor="#ff3424"><h1>- Happy Cooking! - </h1>
            </marquee>
        </div>
        
      </div>
    );
  }
}

export default App;
