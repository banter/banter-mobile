
const successfulRequest = (name) => {
    return  name + '_SUCCESS';

};

const errorRequest = (name) => {
    return  name + '_ERROR';

};

const trendingTopics = 'FETCH_TRENDING_TOPICS';
const collections = 'FETCH_COLLECTIONS';
const queryTopics = 'QUERY_TOPICS';


const TOPIC_STORE = {
    TRENDING_TOPICS: trendingTopics,
    TRENDING_TOPICS_SUCCESS: successfulRequest(trendingTopics),
    TRENDING_TOPICS_ERROR: errorRequest(trendingTopics),
    COLLECTIONS: collections,
    COLLECTIONS_SUCCESS: successfulRequest(collections),
    COLLECTIONS_ERROR: errorRequest(collections),
    QUERY_TOPICS: queryTopics,
    QUERY_TOPICS_SUCCESS: successfulRequest(queryTopics),
    QUERY_TOPICS_ERROR: errorRequest(queryTopics),
  };

  export default TOPIC_STORE;
