import axios from './config/instance';

export const kakaoLoginAPI = (code: string) => {
  return axios.get(`/kakao-login?code=${code}`);
};
