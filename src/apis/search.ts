import { APIResponse } from '@/models/config/axios';
import axios from './config/instance';
import { SearchKeywordRequest, SearchResponse } from '@/models/search';

const PREFIX = '/search';

export const searchKeyowrdAPI = (keyword : string) => {
    return axios.get<APIResponse<never>>(PREFIX + '/keyword/', {
        params : {keyName : keyword}
    });
};

export const searchHashtagAPI = () => {
    return axios.get<APIResponse<never>>(PREFIX + '/hashtag');
}
