import { applyMiddleware } from 'redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import PokemonReducer  from './reducers/PokemonReducer';
import PokemonDataReducer from './reducers/PokemonDataReducer';
const rootReducer = combineReducers({
    PokemonReducer,PokemonDataReducer
})
export const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store
