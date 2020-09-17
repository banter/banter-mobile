import {combineReducers} from 'redux';
import topicReducer from './topicReducer.js';

const allReducers = combineReducers({
  topicState: topicReducer,
});

export default allReducers;
