export function showNavBar(playlist) {
    return {
      type: 'SHOW_NAV',
      payload: true,
    };
  }


export function hideNavBar(playlist) {
    return {
      type: 'HIDE_NAV',
      payload: false,
    };
  }

// export function  showNavBar(requestName , apiRequest) {
//     return async dispatch => {
//       dispatch(fetchSuccess("IS_NAV_DISPLAYED", true));
//   }
