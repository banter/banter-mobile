import {getTrendingTopics, getCollections, getTopic, getTopics} from '../api/topics';
import {fetchDataGeneral} from './index';
import { TOPIC_STORE } from '../constants';
export function fetchTrendingTopics() {
  return fetchDataGeneral(TOPIC_STORE.TRENDING_TOPICS, getTrendingTopics());
}

export function fetchCollections() {
  return fetchDataGeneral(TOPIC_STORE.COLLECTIONS, getCollections());
}

export function queryTopics(tagString) {
  return fetchDataGeneral(TOPIC_STORE.QUERY_TOPICS, getTopics(tagString));
}

export function fetchTopic(topicId) {
  return fetchDataGeneral(TOPIC_STORE.GET_TOPIC, getTopic(topicId));
}

export function setCurrentTopic(playlist) {
  return {
    type: TOPIC_STORE.SET_PLAYLIST,
    payload: playlist,
  };
}
