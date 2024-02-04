import { APIResponse } from '@/models/config/axios';
import { LoginRequest, LoginResponse } from '@/models/user';
import {
  AlarmResponse,
  DeleteAlarmRequest,
  DeleteAlarmResponse,
} from '@/models/alarm';

import axios from './config/instance';

const PREFIX = '/user';

export const loginAPI = (data: LoginRequest) => {
  return axios.post<APIResponse<LoginResponse>>(PREFIX + '/login', data);
};

export const getAlarmAPI = () => {
  return axios.get<APIResponse<AlarmResponse>>(PREFIX + '/alarm');
};

export const deleteSelectAlarmAPI = (data: DeleteAlarmRequest) => {
  return axios.delete<APIResponse<DeleteAlarmResponse>>(
    PREFIX + '/alarm/selectDelete',
    {
      data,
    },
  );
};
