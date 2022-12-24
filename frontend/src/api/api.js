import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/v1/',
});

export const getLogin = async (loginData) => {
  const response = await instance.post('login', loginData);
  return response;
};

export const getData = async (token) => {
  const header = { Authorization: `Bearer ${token}` };
  const response = await instance.get('data', { headers: header });
  return response;
};
