import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipes } from './../reducers/supply-recipes.js';

class SearchField extends Component{
    constructor(){
        super();

        this.state = {searchTerm:''}

        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    handleChange(event){
        this.setState({searchTerm:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.setRecipes(this.state.searchTerm);
        this.setState({searchTerm:''});
    }

    render(){
        return(
            <form 
              className="search"
              onSubmit={ this.handleSubmit }
            >
                <input 
                  type="text" 
                  className="search-field"
                  placeholder="Start typing your available ingredients..."
                  value={ this.state.searchTerm }   
                  onChange= { this.handleChange }             
                />
                <button className="search-btn btn btn-primary">
                   SEARCH RECIPES 
                </button>
            </form>
        );
    }
}

export default connect(state=>state||{},{setRecipes})(SearchField);