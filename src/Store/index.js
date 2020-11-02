// import {createStore, applyMiddleware} from 'redux';
// import mainReducer from '../Reducers';
// import thunk from 'redux-thunk';
// export default function configureStore(){
//     return createStore(
//         mainReducer,
//         applyMiddleware(thunk)
//     )
// }
import { createStore as reduxCreateStore } from "redux";

let store;

export function createStore(initialState) {
  const args = [].slice.call(arguments);
  store = reduxCreateStore.apply(
    undefined,
    [reducer]
      .concat(args)
      .concat(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  return store;
}

function reducer(state, action) {
  return action && action.replaceState ? action.state : state;
}

export function getState(selector) {
  return selector ? selector(store.getState()) : store.getState();
}

export function updateState(property, update, actionName) {
  console.log("Updating State", property, update, actionName);
  const state = store.getState();
  const newState = { ...state, [property]: update(state[property]) };
  const type = typeof actionName !== "undefined" ? actionName : "REPLACE_STATE";
  store.dispatch({ type, replaceState: true, state: newState });
  console.log("Updated State", newState);
}

