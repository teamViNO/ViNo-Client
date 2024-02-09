import { APIResponse } from '@/models/config/axios';
import axios from './config/instance';
import { ResponseSearch } from '@/models/search';

const PREFIX = '/search';

export const searchAPI = (type : string, keyword : string) => {
    const paramType = type === 'keyword' ? 'keywordName' : 'hashtagName';
    return axios.get<APIResponse<ResponseSearch>>(PREFIX + `/${type}/`, {
        params : {[paramType] : keyword}
    });
}