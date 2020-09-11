import API from '../constants/api';

export async function getTopics() {
  const response = await fetch(`${API.BASE_URL}${API.TOPICS}${API.TRENDING}?sinceDaysAgo=3&limit=15`);
  const topics = await response.json();

  return topics;
}
