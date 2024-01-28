import { APIResponse } from '@/models/config/axios';
import { LoginRequest, LoginResponse } from '@/models/user';

import { axiosInstance } from './config/instance';

const PREFIX = '/user';

export const loginAPI = (data: LoginRequest) => {
  return axiosInstance.post<APIResponse<LoginResponse>>(
    PREFIX + '/login',
    data,
  );
};
