import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipes } from './../reducers/supply-recipes.js';
import './search-field.css';

class SearchField extends Component{
    constructor(props){
        super(props);

        this.state = {searchTerm:''}

        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    handleChange(event){
        this.setState({searchTerm:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        setRecipes(this.state.searchTerm);
        this.setState({searchTerm:''});
    }

    componentDidMount() {
    this.props.setRecipes('potatoes,bacon,broccoli')
  }
    

    render(){
        return(
            <div className="landing-top">
                <div className="landing-top-left">
                    <h1>Recipe Ideas</h1>
                    <h3>Don't know what to cook?</h3>
                    <h3>Tell us what you have in your pantry...</h3>
                    <form 
                    className="search"
                    onSubmit={ this.handleSubmit }
                    >
                        <input 
                        type="text" 
                        className="search-field"
                        placeholder="e.g. potatoes, bacon, broccoli..."
                        value={ this.state.searchTerm }   
                        onChange= { this.handleChange }             
                        />
                        <button className="search-btn btn btn-primary">
                        SEARCH RECIPES 
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(state => state.SupplyRecipes || {}, { setRecipes })(SearchField);