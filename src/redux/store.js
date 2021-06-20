import { createStore, combineReducers, applyMiddleware } from 'redux'
import cakeReducer from './cake/cakeReducer';
import drinksReducer from './drinks/drinksReducer';
import userReducer from './users/userReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cakes: cakeReducer,
    drinks: drinksReducer,
    users: userReducer 
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;


