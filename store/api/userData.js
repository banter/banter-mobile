import API from '../../constants/api';
import {getData} from './index';

export async function getForYou() {
  const url = `${API.BASE_URL}${API.TOPICS}${API.FORYOU}?limit=15`;
  return await getData({url});
}

export async function getUser() {
  const url = `${API.BASE_URL}${API.USERS}${API.ME}`;
  return getData({url});
}
