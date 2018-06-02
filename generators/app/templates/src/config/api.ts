import axios, { AxiosPromise } from 'axios';

export interface GetReviewCasesByDateInfo {
  date: string;
}

axios.defaults.withCredentials = false;

export function initApi() {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : ''
}


export const Api = {
  common: {
    getUsers: axios.get('/api/users')
  }
};
