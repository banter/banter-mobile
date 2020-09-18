import {getTrendingTopics, getCollections} from '../api/topics';
import {fetchDataGeneral} from './index';
import TOPIC_STORE from '../constants';
import API from '../../constants/api';

export function fetchTrendingTopics() {
  return fetchDataGeneral(TOPIC_STORE.TRENDING_TOPICS, getTrendingTopics());
}

export function fetchCollections() {
  return fetchDataGeneral(TOPIC_STORE.COLLECTIONS, getCollections());
}
