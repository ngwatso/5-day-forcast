import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

// !! Reducers

// !! Middleware
const middleware = applyMiddleware(thunk);

// !! Store
const store = createStore("", middleware);

export default store;
