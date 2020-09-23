import API from '../../constants/api';
import {getData} from './index';

export async function getTrendingTopics() {
  const url = `${API.BASE_URL}${API.TOPICS}${API.TRENDING}?sinceDaysAgo=3&limit=15`;
  return await getData(url);
}

export async function getCollections() {
  const url = `${API.BASE_URL}${API.TOPICS}${API.COLLECTIONS}?tagType=sport&sinceDaysAgo=3&limit=10`;
  return await getData(url);
}

export async function getTopics(tagString) {
  const url = `${API.BASE_URL}${API.TOPICS}?q=${tagString}&limit=10`;
  return await getData(url);
}
