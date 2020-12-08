
const successfulRequest = (name) => {
    return  name + '_SUCCESS';

};

const errorRequest = (name) => {
    return  name + '_ERROR';

};

  const forYou = 'FETCH_FOR_YOU';
  const getUser = 'FETCH_CURRENT_USER';

  const USER_DATA_STORE = {
    FOR_YOU: forYou,
    FOR_YOU_SUCCESS: successfulRequest(forYou),
    FOR_YOU_ERROR: errorRequest(forYou),
    GET_USER: getUser,
    GET_USER_SUCCESS: successfulRequest(getUser),
    GET_USER_ERROR: errorRequest(getUser),
  };

  export default USER_DATA_STORE;
