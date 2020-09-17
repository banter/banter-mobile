export function increment() {
  return {
    type: 'Increment',
  };
}
export function decrement() {
  return {
    type: 'Decrement',
  };
}

export function  fetchDataGeneral(requestName , apiRequest) {
  return async dispatch => {
    dispatch(fetchRequest(requestName));
    try {
      const topics = await apiRequest;
      dispatch(fetchSuccess(topics, requestName));
    } catch (error) {
      dispatch(fetchError(error.message, requestName));
    }
  };
}

const fetchRequest = (name) => {
  return {
    type: name,
  };
};

const fetchSuccess = (data, name) => {
  return {
    type: name + '_SUCCESS',
    payload: data,
  };
};

const fetchError = (error, name) => {
  return {
    type: name + '_ERROR',
    payload: error,
  };
};
