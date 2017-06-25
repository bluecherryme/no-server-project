import React, { Component } from 'react';
import Ingredients from './ingredients';
import './recipe-detail.css';


class RecipeDetail extends Component{
    render(){       
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
                    </div>
                </div>
            </div>
        );
    }
}


export default RecipeDetail;