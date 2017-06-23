import axios from 'axios';
import API_Key from './../API-Key';


const initialState = {
    error: false,
    loading: false,
    search: true,
    recipes: {}
};

export function setRecipes(searchTerm){
    return{
        type: SET_RECIPES,
        payload: axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=${searchTerm}%2Cflour%2Csugar&limitLicense=false&number=6&ranking=1`,
        {
            headers:{"X-Mashape-Key" : API_Key,
                    "Accept" : "application/json"}
        })
        .then((payload)=>payload.data)
    }
}


export function reset(){
    return {type: RESET};
}

const RESET = 'RESET';
const SET_RECIPES = 'SET_RECIPES';

export default function recipes(state = initialState,action){
   switch (action.type){
       case RESET:
        return initialState;
       case SET_RECIPES + '_FULFILLED':
       //It worked, we have data
         return{
             error: false,
             loading: false,
             search: false,
             recipes: action.payload
         }
       case SET_RECIPES + '_REJECTED':
            break;
       default: return state;
   } 
}

