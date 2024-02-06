import { APIResponse } from '@/models/config/axios';
import axios from './config/instance';
import { SearchKeywordRequest, SearchResponse } from '@/models/search';

const PREFIX = '/search';

export const searchKeyowrdAPI = (data: SearchKeywordRequest) => {
    return axios.post<APIResponse<SearchResponse>>(PREFIX + '/keyword', data);
  };