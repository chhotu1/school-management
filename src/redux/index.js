import {  applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore} from 'redux'
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/RootReducer";
let composeEnhancers = compose;
if (typeof window !== "undefined") {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store;
