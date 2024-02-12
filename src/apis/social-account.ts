import { APIResponse } from '@/models/config/axios';
import { LoginResponse } from '@/models/user';

import axios from './config/instance';

export const kakaoLoginAPI = (code: string) => {
  return axios.get<APIResponse<LoginResponse>>(`/kakao-login?code=${code}`);
};
