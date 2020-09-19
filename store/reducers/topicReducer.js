import TOPIC_STORE from '../constants';
import {requesting, success, error} from './index';

let initialState = {
  trendingTopics: [],
  collections: [],
  errorMessage: '',
  isTrendingTopicsLoading: false,
  isCollectionsLoading: false,
  isRequestingQuery: false,
  tagMatches: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOPIC_STORE.TRENDING_TOPICS:
      return requesting(state, 'isTrendingTopicsloading');
    case TOPIC_STORE.TRENDING_TOPICS_SUCCESS:
      return success(state, 'isTrendingTopicsloading', 'trendingTopics', action);
    case TOPIC_STORE.TRENDING_TOPICS_ERROR:
      return error(state, 'isTrendingTopicsloading', 'trendingTopics', action, 'errorMessage');
    case TOPIC_STORE.COLLECTIONS:
      return requesting(state, 'isCollectionsLoading');
    case TOPIC_STORE.COLLECTIONS_SUCCESS:
      return success(state, 'isCollectionsLoading', 'collections', action);
    case TOPIC_STORE.COLLECTIONS_ERROR:
      return error(state, 'isCollectionsLoading', 'collections', action, 'errorMessage');
    case TOPIC_STORE.QUERY_TOPICS:
      return requesting(state, 'isRequestingQuery');
    case TOPIC_STORE.QUERY_TOPICS_SUCCESS:
      return success(state, 'isRequestingQuery', 'tagMatches', action);
    case TOPIC_STORE.QUERY_TOPICS_ERROR:
      return error(state, 'isRequestingQuery', 'tagMatches', action, 'errorMessage');
    default:
      return state;
  }
}
