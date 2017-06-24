import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipe } from './../reducers/reducer-detail-view.js';
import './recipe-card.css';

export class RecipeCard extends Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e,ID) {
    e.preventDefault();
    getRecipe(ID);
    console.log('click');
    }

    render(){
    var URL = this.props.image;
    var title = this.props.title;
    var ID = this.props.recipeID;
        return(
            <div className='col-md-4 recipe-card'
                onClick={e=>this.handleClick(e,ID)} 
                style={{"backgroundImage":`url(${URL})`}}>
                >
                <div className="recipe-header text-center">
                    {title}
                </div>
                
                                    
            </div>
        );
    }
}


export default connect(state => state.DetailView || [], { getRecipe })(RecipeCard);