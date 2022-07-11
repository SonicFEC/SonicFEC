import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import axios from 'axios';
import rootReducer from './reducers/main';
import get from '../../server/controllers';
// const store = Redux.legacy_createStore(rootReducer);

const initialState = { //ADD to the initial state with any data you should be mounting/starting the program with
  qExpanded: false, //this state will have to be imported and addressed in a reducer and container file
  qModal: false,
  products: get('/product').then((res) => { initialState.products = res; }),
  display: this.products[0]
};


const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;
//Thunk allows us to dispatch actions asynchronously (think API requests) by making it so that our actions
//can return functions instead of objects (which can invoke dispatch themselves)

// combineReducers generates a central reducer from all reducers in ./reducers
// Every file in ./reducers needs to export an object with one key
// The key for each reducer must be unique, as it becomes part of the central store
