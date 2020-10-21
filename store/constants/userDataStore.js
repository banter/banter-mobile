
const successfulRequest = (name) => {
    return  name + '_SUCCESS';

};

const errorRequest = (name) => {
    return  name + '_ERROR';

};

  const forYou = 'FETCH_FOR_YOU';

  const USER_DATA_STORE = {
    FOR_YOU: forYou,
    FOR_YOU_SUCCESS: successfulRequest(forYou),
    FOR_YOU_ERROR: errorRequest(forYou),
  };

  export default USER_DATA_STORE;
