import { APIResponse } from '@/models/config/axios';
import { LoginRequest, LoginResponse } from '@/models/user';
import { AlarmResponse } from '@/models/alarm';

import { axiosInstance } from './config/instance';

const PREFIX = '/user';

export const loginAPI = (data: LoginRequest) => {
  return axiosInstance.post<APIResponse<LoginResponse>>(
    PREFIX + '/login',
    data,
  );
};

export const checkEmailAPI = (data: CheckEmailRequest) => {
  return axios.post<APIResponse<CheckEmailResponse>>(
    PREFIX + '/checkemail',
    data,
  );
};

export const joinAPI = (data: JoinRequest) => {
  return axios.post<APIResponse<JoinResponse>>(
    PREFIX + '/join',
    data,
  );
};
