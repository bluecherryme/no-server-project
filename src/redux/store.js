import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import SupplyRecipes from './../reducers/supply-recipes';




export default createStore(SupplyRecipes, undefined, applyMiddleware(promiseMiddleware()));