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
