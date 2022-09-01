import { applyMiddleware } from 'redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import pokemonList from "../pages/productList/productListSlice"
import pokemonDataSlice from "../pages/productDescription/productDataSlice"
const rootReducer = combineReducers({
    pokemonList, pokemonDataSlice
})

export const store = configureStore({ reducer: { pokemon: rootReducer } }, applyMiddleware(thunk));

export default store
