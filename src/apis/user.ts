import { APIBaseResponse, APIResponse } from '@/models/config/axios';
import {
  CheckEmailRequest,
  CheckEmailResponse,
  JoinRequest,
  JoinResponse,
  LoginRequest,
  LoginResponse,
  MyInfoResponse,
  UpdateMyInfoRequest,
  UpdatePasswordRequest,
  NickNameRequest,
  NickNameResponse,
  FindEmailResponse,
  FindEmailRequest
} from '@/models/user';
import {
  AlarmResponse,
  ConfirmAlarmRequest,
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

export const confirmSelectAlarmAPI = (data: ConfirmAlarmRequest) => {
  return axios.patch(PREFIX + '/alarm/selectedConfirm', data);
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

export const socialAccountAPI = (code: string) => {
  return axios.get(`/sign-up/success?code=${code}`);
};

export const getMyInfoAPI = () => {
  return axios.get<APIResponse<MyInfoResponse>>(PREFIX + '/myPage/myInfo');
};

export const updateMyInfoAPI = (data: UpdateMyInfoRequest) => {
  return axios.put<APIBaseResponse>(PREFIX + '/myPage/setInfo', data);
};

export const updatePasswordAPI = (data: UpdatePasswordRequest) => {
  return axios.put<APIBaseResponse>(PREFIX + '/myPage/updatePassword', data);
};

export const nickNameAPI = (data: NickNameRequest) => {
  return axios.put<NickNameResponse>(PREFIX + '/nickname', data);
};

export const findEmailAPI = (data : FindEmailRequest) => {
  return axios.post<FindEmailResponse>(
    PREFIX + '/findEmail',
    data
  );
}