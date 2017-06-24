import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import SupplyRecipes from './../reducers/supply-recipes';
import DetailView from './../reducers/reducer-detail-view';

const reducer = combineReducers({
    SupplyRecipes: SupplyRecipes,
    DetailView : DetailView
})

export default createStore(reducer, undefined, applyMiddleware(promiseMiddleware()));