import {combineReducers} from 'redux';
import topicReducer from './topicReducer.js';

const allReducers = combineReducers({
  topics: topicReducer,
});

export default allReducers;
