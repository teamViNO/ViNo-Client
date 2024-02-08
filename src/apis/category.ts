import axiosInstance from './config/instance';

export const getCategories = async () => {
  const response = await axiosInstance.get('/category');
  return response.data.result;
};
