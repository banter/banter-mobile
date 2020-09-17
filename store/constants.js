
const successfulRequest = (name) => {
    return  name + '_SUCCESS';

};

const errorRequest = (name) => {
    return  name + '_ERROR';

};

const trendingTopics = 'FETCH_TRENDING_TOPICS';


const TOPIC_STORE = {
    TRENDING_TOPICS: trendingTopics,
    TRENDING_TOPICS_SUCCESS: successfulRequest(trendingTopics),
    TRENDING_TOPICS_ERROR: errorRequest(trendingTopics),
  };

  export default TOPIC_STORE;
