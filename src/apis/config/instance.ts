import axios from 'axios';

const baseURL = 'https://backend.vi-no.site';
const token = localStorage.token;

export const axiosInstance = axios.create({ baseURL });

// 추후 변경 필요
export const axiosAuthInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${token}` },
});
