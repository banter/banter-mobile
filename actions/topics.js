import {getTopics} from '../api/topics';

export function fetchTopics() {
  return async dispatch => {
    dispatch(fetchTopicsRequest());
    try {
      const topics = await getTopics();
      dispatch(fetchTopicsFulfilled(topics));
    } catch (error) {
      dispatch(fetchTopicsRejected(error.message));
    }
  };
}

const fetchTopicsRequest = (data) => {
  return {
    type: 'FETCH_TOPCS',
  };
};

const fetchTopicsFulfilled = (data) => {
  return {
    type: 'FETCH_TOPCS_FULFILLED',
    payload: data,
  };
};

const fetchTopicsRejected = (error) => {
  return {
    type: 'FETCH_TOPCS_REJECTED',
    payload: error,
  };
};

