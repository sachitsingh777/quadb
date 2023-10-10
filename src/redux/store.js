// store.js
import {  combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import jobReducer from './reducers/jobReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  job: jobReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
