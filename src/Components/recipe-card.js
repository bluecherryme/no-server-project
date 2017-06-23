import React from 'react';
import './recipe-card.css';



export default function RecipeCard(URL,id){
    return(
        <div key={id} className='col-md-4 recipe-card'
            style={{"backgroundImage":`url(${URL})`}}>
            >
            
                        
        </div>
    );
}