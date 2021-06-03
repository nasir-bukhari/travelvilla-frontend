import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";



const middleware = [thunk];

const state = {};


const store = createStore(

  rootReducer,
  state,
  composeWithDevTools(applyMiddleware(...middleware))
);




export default store;

