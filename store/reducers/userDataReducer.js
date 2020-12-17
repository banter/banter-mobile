import {requesting, success, error} from './index';
import { USER_DATA_STORE } from '../constants';

let initialState = {
  forYou: { playlist: []},
  currentUser: {},
  isCurrentUserLoading: false,
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
    case USER_DATA_STORE.GET_USER:
      return requesting(state, 'isCurrentUserLoading');
    case USER_DATA_STORE.GET_USER_SUCCESS:
      return success(state, 'isCurrentUserLoading', 'currentUser', action);
    case USER_DATA_STORE.GET_USER_ERROR:
      return error(state, 'isCurrentUserLoading', 'currentUser', action, 'errorMessage');
    default:
      return state;
  }
}
