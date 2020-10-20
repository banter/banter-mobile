import { setValue} from './index';
import {APP_STYLE_STORE } from '../constants';

let initialState = {
  isNavBarDisplayed: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case APP_STYLE_STORE.HIDE_NAV:
      return setValue(state, 'isNavBarDisplayed', action);
    case APP_STYLE_STORE.SHOW_NAV:
      return setValue(state, 'isNavBarDisplayed', action);
    default:
      return state;
  }
}
