import { APIResponse } from '@/models/config/axios';
import { LoginRequest, LoginResponse } from '@/models/user';
import { AlarmResponse } from '@/models/alarm';
import { getNicknameResponse } from '@/models/user';

import axios from './config/instance';

const PREFIX = '/user';

export const loginAPI = (data: LoginRequest) => {
  return axios.post<APIResponse<LoginResponse>>(PREFIX + '/login', data);
};

export const getAlarm = () => {
  return axios.get<APIResponse<AlarmResponse>>(PREFIX + '/alarm');
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

export const getNicknameAPI = () => {
    return axios.get<APIResponse<getNicknameResponse>>(PREFIX + '/myPage/myInfo');
};

