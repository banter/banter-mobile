export function fetchTopics() {
  return (dispatch) => {
    dispatch(fetchTopicsRequest());
    return fetch('https://api.banteraudio.com/v1/topics/trending/?sinceDaysAgo=3&limit=15')
      .then((response) => response.json())
      .then((json) => dispatch(fetchTopicsFulfilled(json)));
  };
}

export const fetchTopicsRequest = (data) => {
  return {
    type: 'FETCH_TOPCS',
  };
};

export const fetchTopicsFulfilled = (data) => {
  return {
    type: 'FETCH_TOPCS_FULFILLED',
    payload: data,
  };
};

export const fetchTopicsRejected = (error) => {
  return {
    type: 'FETCH_TOPCS_REJECTED',
    payload: error,
  };
};

// export async function fetchTopicsCall() {
//   const response = await fetch(
//     'https://api.banteraudio.com/v1/topics/trending/?sinceDaysAgo=3&limit=15',
//   );
//   return response.json();
// }
