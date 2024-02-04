import { APIResponse } from '@/models/config/axios';
import {
  CheckEmailRequest,
  CheckEmailResponse,
  JoinRequest,
  JoinResponse,
  LoginRequest,
  LoginResponse,
} from '@/models/user';
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

export const checkEmailAPI = (data: CheckEmailRequest) => {
  return axios.post<APIResponse<CheckEmailResponse>>(
    PREFIX + '/checkemail',
    data,
  );
};

export const joinAPI = (data: JoinRequest) => {
  return axios.post<APIResponse<JoinResponse>>(PREFIX + '/join', data);
};
