import axios from './config/instance';

export const kakaoLoginAPI = (token: string) => {
  return axios.get(`/kakao-login?token=${token}`);
};
