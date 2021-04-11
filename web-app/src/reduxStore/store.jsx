import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducer/reducers";
import ReduxThunk from "redux-thunk";

export const Store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
