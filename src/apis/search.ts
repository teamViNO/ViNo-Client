import { APIResponse } from '@/models/config/axios';
import axios from './config/instance';

const PREFIX = '/search';

export const searchAPI = (type : string, keyword : string) => {
    const paramType = type === 'keyword' ? 'keywordName' : 'hashtagName';
    return axios.get<APIResponse<any>>(PREFIX + `/${type}/`, {
        params : {[paramType] : keyword}
    });
}