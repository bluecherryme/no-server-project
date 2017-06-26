import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import API_Key from './../API-Key';
import './recipe-card.css';

export class RecipeCard extends Component{
    constructor(props){
        super(props);

        this.state = {recipe:{}}

        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick(ID) {
    
    axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${ID}/information?includeNutrition=false`,
        {
            headers:{"X-Mashape-Key" : API_Key,
                    "Accept" : "application/json"}
        })
        .then((payload)=>this.setState({ recipe: payload.data }))
    }
    

    render(){
        console.log(this.state);
    var URL = this.props.image;
    var title = this.props.title;
    var ID = this.props.recipeID;
        return(
            <div className='col-md-4 recipe-card'
                onClick={()=>this.handleClick(ID)} 
                style={{"backgroundImage":`url(${URL})`}}>
                >
                <div className="recipe-header text-center">
                    {title}
                </div>                                   
            </div>
        );
    }
}


export default connect()(RecipeCard);