import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
    usersPage:usersReducer,
});


let store = createStore(reducers,composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = store;


export default store;

