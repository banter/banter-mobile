let initialState = {
  topics: [],
  errorMessage: '',
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TOPCS':
      return {...state, loading: true};
    case 'FETCH_TOPCS_FULFILLED':
      return {...state, topics: action.payload, loading: false};
    case 'FETCH_TOPCS_REJECTED':
      return {...state, errorMessage: action.payload, loading: false};
    default:
      return state;
  }
}
