import { APIResponse } from '@/models/config/axios';
import { LoginRequest, LoginResponse } from '@/models/user';
import { AlarmResponse } from '@/models/alarm';

import axios from './config/instance';

const PREFIX = '/user';

export const loginAPI = (data: LoginRequest) => {
  return axios.post<APIResponse<LoginResponse>>(PREFIX + '/login', data);
};

export const getAlarm = () => {
  return axios.get<APIResponse<AlarmResponse>>(PREFIX + '/alarm');
};
