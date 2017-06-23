import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeCard from './recipe-card';
import './recipe-view.css';


class RecipeView extends Component{
    
    render(){
        var recipes = this.props.recipes;
        return(
            <div className='container-fluid'>
                <div className="recipe-gallery row">   
                    {recipes.map((recipe,index) =>{
                        return RecipeCard(recipe.image, index);
                    })}        
                    
                </div>
                
                
            </div>
        );
    }
}


function mapStateToProps(state){
    return(
       {recipes:state.recipes}                
    );
}

export default connect(mapStateToProps)(RecipeView);