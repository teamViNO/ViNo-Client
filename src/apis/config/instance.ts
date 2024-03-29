import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? '/api'
    : 'https://backend.vi-no.site';

const axiosInstance = axios.create({ baseURL, timeout: 1000 * 60 * 5 });

axiosInstance.interceptors.request.use((config) => {
  config.withCredentials = true;
  config.headers['Access-Control-Allow-Origin'] = '*';

  if (localStorage.vino) {
    const storage = JSON.parse(localStorage.vino);

    if (storage['user-token']) {
      config.headers.Authorization = `Bearer ${storage['user-token']}`;
    }
  }

  return config;
});

export default axiosInstance;
