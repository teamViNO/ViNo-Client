import axios from './config/instance';

import { APIResponse } from '@/models/config/axios';
import {
  ModelingProcessRequest,
  ModelingProcessResponse,
  ModelingResponse,
} from '@/models/modeling';

const PREFIX = '/video';

export const modelingProcess1 = (link: string) => {
  return axios.post<APIResponse<ModelingProcessResponse>>(
    PREFIX + `/?v=${encodeURIComponent(link)}`,
  );
};

export const modelingProcess2 = (data: ModelingProcessRequest) => {
  return axios.post<APIResponse<ModelingProcessResponse>>(
    PREFIX + `/speech`,
    data,
  );
};

export const modelingProcess3 = (data: ModelingProcessRequest) => {
  return axios.post<APIResponse<ModelingResponse>>(PREFIX + `/summary`, data);
};
