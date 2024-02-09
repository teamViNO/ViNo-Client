import axiosInstance from './config/instance';

export const getCategories = async () => {
  const response = await axiosInstance.get('/category');
  return response.data.result;
};

export const putSubToOtherTop = async (
  categoryId: number,
  topCategoryId: number,
) => {
  const response = await axiosInstance.put(
    `/category/${categoryId}/${topCategoryId}`,
  );
  return response.data.result;
};

export const putSubToTop = async (categoryId: number) => {
  const response = await axiosInstance.put(`/category/up/${categoryId}`);
  return response.data.result;
};

export const putTopToOtherTop = async (
  categoryId: number,
  topCategoryId: number,
) => {
  const response = await axiosInstance.put(
    `/category/down/${categoryId}/${topCategoryId}`,
  );
  return response.data.result;
};
