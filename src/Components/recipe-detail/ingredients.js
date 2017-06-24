import React from 'react';
import './ingredients.css';


export default function Ingredients(img,name){
    return(
        <div className="ingredients">
            <img src="#" alt="IngredientPic"/>
            <div className="ingredient-name">IngredientName</div>
        </div>
    );
}