import { APIResponse } from '@/models/config/axios';
import { sendSMSRequest, checkSMSRequest, smsResponse } from '@/models/sms';

import axios from './config/instance';

const PREFIX = '/sms';

export const sendSMSAPI = (data: sendSMSRequest) => {
    return axios.post<APIResponse<smsResponse>>(PREFIX + '/sendSMS', data);
  };

export const checkSMSAPI = (data : checkSMSRequest, token : string) => {
    return axios.post<APIResponse<smsResponse>>(PREFIX + '/checkSMS', data, {
      headers : { Authorization : `Bearer ${token}`}
    });
}