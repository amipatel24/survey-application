import { createStore, applyMiddleware } from "redux";
import RootReducer from '../rootReducer/rootReducer';
import thunk from 'redux-thunk';

const Store = createStore(
    RootReducer,
    applyMiddleware(thunk)
);
export default Store;
