import * as axios from 'axios';

const instance = axios.create({
  // withCredentials: true,
  baseURL: '/api/v1/',
  // headers:     {
  //     "API-KEY": "93b5342d-2271-4c27-ac60-ebcf95f8e9d2"
  // }
});

export const usersAPI = {
  getUsers(currentPage = 1, pagesSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
      .then((response) => response.data);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then((response) => response.data);
  },
};
