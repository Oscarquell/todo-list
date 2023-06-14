import rootReducer from "./reducers/reducers";
import {createStore} from "redux";

const initialState = {}

const store = createStore(rootReducer(), initialState)

export default store;