import axios from 'axios';
import API_Key from './../API-Key';


const initialState = { recipe: {} };

const GET_RECIPE = 'GET_RECIPE';

export function getRecipe(ID){
    return{
        type: GET_RECIPE,
        payload: axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/18078/information?includeNutrition=false`,
        {
            headers:{"X-Mashape-Key" : API_Key,
                    "Accept" : "application/json"}
        })
        .then((payload)=>payload)
    }
}


export default function recipe(state = initialState,action){
   switch (action.type){
       case GET_RECIPE + '_FULFILLED':
         console.log(action.payload.data)
         return{ recipe: action.payload.data }
       case GET_RECIPE + '_REJECTED':
            break;
       default: return state;
   } 
}

