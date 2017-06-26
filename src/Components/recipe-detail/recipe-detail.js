import React, { Component } from 'react';
import Ingredients from './ingredients';
import burger from "../../img/burger.jpeg";
import './recipe-detail.css';


class RecipeDetail extends Component{
    render(){       
        return(
            <div className="detail-page">
                <h1 className='text-center'>Tasty Burger</h1>
                <img className="img-response center-block" src={burger} alt="burger"/>
                <div className="details">
                    <Ingredients/>
                </div>
            </div>
        );
    }
}


export default RecipeDetail;