import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import { getAllProductsReducer, getProductDetailsReducer } from "./reducers/productReducer";

const reducer = combineReducers({
    getProducts: getAllProductsReducer,
    getProductDetails: getProductDetailsReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;