import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ingredients from './ingredients';
import './recipe-detail.css';


class RecipeDetail extends Component{
    render(){
            console.log(this.props.recipe);       
        return(
            <div className="detail-page">
                <h1>Recipe Name</h1>
                <img src="#" alt=""/>
                <div className="details">
                    <div className="ingredients">
                        <Ingredients/>
                    </div>
                    <div className="instructions">
                        Instructions or link to recipe
                        {this.props.recipe}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return(
       {recipe:state.recipe}                
    );
}

export default connect(mapStateToProps)(RecipeDetail);