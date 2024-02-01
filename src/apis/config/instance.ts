import axios from 'axios';

const baseURL = 'https://backend.vi-no.site';

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use((config) => {
  if (localStorage.vino) {
    const storage = JSON.parse(localStorage.vino);

    if (storage['user-token']) {
      config.headers.Authorization = `Bearer ${storage['user-token']}`;
    }
  }

  return config;
});

export default axiosInstance;
