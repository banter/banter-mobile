import {fetchDataGeneral} from './index';
import { USER_DATA_STORE } from '../constants';
import { getForYou, getUser } from '../api/userData';

export function fetchForYou() {
  return fetchDataGeneral(USER_DATA_STORE.FOR_YOU, getForYou());
}
export function getCurrentUser() {
  return fetchDataGeneral(USER_DATA_STORE.GET_USER, getUser());
}
