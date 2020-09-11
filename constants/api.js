const CONSTANTS = {
  API_BASE_URLS: {
    // LOCAL: 'http://localhost:8080',
    // DEVELOPMENT: 'https://api.banteraudio.com',
    PRODUCTION: 'https://api.banteraudio.com',
  },
};

// const ENV = process.env.NODE_ENV.toUpperCase();

const API = {
  OAUTH_BASE_URL: CONSTANTS.API_BASE_URLS.PRODUCTION,
  BASE_URL: `${CONSTANTS.API_BASE_URLS.PRODUCTION}/v1/`,
  TOPICS: 'topics/',
  TRENDING: 'trending/',
  COLLECTIONS: 'collections/',
  USERS: 'users/',
  ME: 'me/',
  FOLLOWING: 'following/',
  FORYOU: 'for-you',
  LIKES: 'likes/',
  LISTENS: 'listens/',
  UPDATE: 'update',
  FOLLOW: 'follow',
  UNFOLLOW: 'unfollow',
  LIKE: 'like',
  UNLIKE: 'unlike',
  LOGIN: 'login',
  LOGIN_ANON: 'loginAnonymous',
  REGISTER: 'register',
  // LOGOUT: `logout?redirect_uri=${window.location.origin}/home`,
};

export default API;
