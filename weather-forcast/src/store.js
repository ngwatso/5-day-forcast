import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

// !! Reducers
import reducers from "./reducers/weatherReducer";

// !! Middleware
const middleware = applyMiddleware(thunk);

// !! Store
const store = createStore(reducers, middleware);

export default store;
