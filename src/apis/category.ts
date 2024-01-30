import { APIResponse } from '@/models/config/axios';
import { MoveResponse } from '@/models/category';

import { axiosInstance } from './config/instance';

const PREFIX = '/category';

export const moveAPI = (categoryID: number, topCategoryID: number) => {
  return axiosInstance.put<APIResponse<MoveResponse>>(
    PREFIX + `/${categoryID}/${topCategoryID}`,
  );
};
