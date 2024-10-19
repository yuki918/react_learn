import { createStore, combineReducers } from "redux";
import Counter from "../components/Counter";

const initialState = 0;
const reducer = (state = initialState, { type, step }) => {
  // console.log(type);
  switch (type) {
    case "counter/+":
      return state + step;
    case "counter/-":
      return state - step;
    default:
      return state;
  }
};
const reducer02 = (state = initialState, { type, step }) => {
  // console.log(type);
  switch (type) {
    case "counter02/+":
      return state + step;
    case "counter02/-":
      return state - step;
    default:
      return state;
  }
};

const reducers = combineReducers({
  counter: reducer,
  counter02: reducer02
});

export default createStore(
  reducers
);