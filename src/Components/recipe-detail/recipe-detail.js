import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                        {JSON.stringify(this.props.recipe)}
                        {console.log(this.props.recipe)}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return(
       {recipe:state.DetailView.recipe}                
    );
}

export default connect(mapStateToProps)(RecipeDetail);