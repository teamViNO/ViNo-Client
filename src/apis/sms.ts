import { APIResponse } from '@/models/config/axios';
import { sendSMSRequest, sendSMSResponse } from '@/models/sms';

import axios from './config/instance';

const PREFIX = '/sms';

export const sendSMSAPI = (data: sendSMSRequest) => {
    return axios.post<APIResponse<sendSMSResponse>>(PREFIX + '/sendSMS', data);
  };