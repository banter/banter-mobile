import TOPIC_STORE from '../constants';
import {requesting, success, error} from './index';

let initialState = {
  topics: [],
  collections: [],
  errorMessage: '',
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOPIC_STORE.TRENDING_TOPICS:
      return requesting(state, 'loading');
    case TOPIC_STORE.TRENDING_TOPICS_SUCCESS:
      return success(state, 'loading', 'topics', action);
    case TOPIC_STORE.TRENDING_TOPICS_ERROR:
      return error(state, 'loading', 'topics', action, 'errorMessage');
    case TOPIC_STORE.COLLECTIONS:
      return requesting(state, 'loading');
    case TOPIC_STORE.COLLECTIONS_SUCCESS:
      return success(state, 'loading', 'collections', action);
    case TOPIC_STORE.COLLECTIONS_ERROR:
      return error(state, 'loading', 'collections', action, 'errorMessage');
    default:
      return state;
  }
}
