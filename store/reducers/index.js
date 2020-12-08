import {combineReducers} from 'redux';
import topicReducer from './topicReducer.js';
import userDataReducer from './userDataReducer.js';
import appStyleReducer from './appStyleReducer.js';

const allReducers = combineReducers({
  topicState: topicReducer,
  userDataState: userDataReducer,
  appStyleState: appStyleReducer,
});

export default allReducers;

export function requesting(state,loadingVariable) {
  state[loadingVariable] = true;
  return {...state};
}

export function success(state, loadingVariable, alteredVariable, action, payloadKey) {
  state[loadingVariable] = false;
  state[alteredVariable] = payloadKey ? action.payload[payloadKey] : action.payload;
  return {...state};
}

export function error(state,loadingVariable, alteredVariable, action, errorVariable) {
  state[loadingVariable] = false;
  state[alteredVariable] = [];
  state[errorVariable] = action.payload;
  return {...state};
}

export function setValue(state, alteredVariable, action) {
  state[alteredVariable] = action.payload;
  return {...state};
}
