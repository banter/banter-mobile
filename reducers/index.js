import {combineReducers} from 'redux';
import topicReducer from './topicReducer.js';
import deleteReducer from './deleteReducer.js';

const allReducers = combineReducers({
  topicState: topicReducer,
  deleteState: deleteReducer,
});

export default allReducers;
