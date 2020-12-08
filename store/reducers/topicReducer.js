import TOPIC_STORE from '../constants/topicStore';
import {requesting, success, error} from './index';

let initialState = {
  topic: {},
  trendingTopics: [],
  topicPlaylist: [],
  collections: [],
  errorMessage: '',
  isTrendingTopicsLoading: false,
  isCollectionsLoading: false,
  isRequestingQuery: false,
  isRequestingTopic: false,
  tagMatches: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOPIC_STORE.TRENDING_TOPICS:
      return requesting(state, 'isTrendingTopicsloading');
    case TOPIC_STORE.SET_PLAYLIST:
      return success(state, null, 'topicPlaylist', action);
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
    case TOPIC_STORE.GET_TOPIC:
      return requesting(state, 'isRequestingTopic');
    case TOPIC_STORE.GET_TOPIC_SUCCESS:
      const newState = success(state, null, 'topicPlaylist', action, 'playlist');
      return success(newState, 'isRequestingTopic', 'topic', action, 'primaryTag');
    case TOPIC_STORE.GET_TOPIC_ERROR:
      return error(state, 'isRequestingTopic', 'topic', action, 'errorMessage');
    default:
      return state;

  }
}
