import TOPIC_STORE from '../constants/topicStore';
import {requesting, success, error} from './index';
import { USER_DATA_STORE } from '../constants';

let initialState = {
  forYou: { playlist: []},
  isForYouLoading: false,
  errorMessage: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_DATA_STORE.FOR_YOU:
      return requesting(state, 'isForYouLoading');
    case USER_DATA_STORE.FOR_YOU_SUCCESS:
      return success(state, 'isForYouLoading', 'forYou', action);
    case USER_DATA_STORE.FOR_YOU_ERROR:
      return error(state, 'isForYouLoading', 'forYou', action, 'errorMessage');
    default:
      return state;
  }
}
