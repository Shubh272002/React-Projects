import MyReducer from "./Reducer";
import { createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const Store = createStore(MyReducer,applyMiddleware(thunk))

export default Store;