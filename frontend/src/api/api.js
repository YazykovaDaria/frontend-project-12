import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/v1/',
});

export const logIn = async (loginData) => {
  const response = await instance.post('login', loginData);
 return response;
};

// export const profileAPI = {
//   getProfile(userId) {
//     return instance.get(`profile/${userId}`)
//       .then((response) => response.data);
//   },
// };
