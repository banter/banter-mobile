import {combineReducers} from 'redux';
import topicReducer from './topicReducer.js';

const allReducers = combineReducers({
  topicState: topicReducer,
});

export default allReducers;



export function requesting(state,loadingVariable) {
  state[loadingVariable] = true;
  return {...state};
}

export function success(state,loadingVariable, alteredVariable, action) {
  state[loadingVariable] = false;
  state[alteredVariable] = action.payload;
  return {...state};
}

export function error(state,loadingVariable, alteredVariable, action, errorVariable) {
  state[loadingVariable] = false;
  state[alteredVariable] = [];
  state[errorVariable] = action.payload;
  return {...state};
}
