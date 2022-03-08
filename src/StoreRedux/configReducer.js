import { combineReducers, createStore } from "redux";
import ToDoReducer from "./ToDoReducer";

const rootReducer = combineReducers({
  ToDoReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
