import axiosInstance from './config/instance';

// 모든 카테고리 가져오는 API
export const getCategories = async () => {
  const response = await axiosInstance.get('/category');
  return response.data.result;
};

// 카테고리 이동1 API
export const putSubToOtherTop = async (
  categoryId: number,
  topCategoryId: number,
) => {
  const response = await axiosInstance.put(
    `/category/${categoryId}/${topCategoryId}`,
  );
  return response.data.result;
};

// 카테고리 이동2 API
export const putSubToTop = async (categoryId: number) => {
  const response = await axiosInstance.put(`/category/up/${categoryId}`);
  return response.data.result;
};

// 카테고리 이동3 API
export const putTopToOtherTop = async (
  categoryId: number,
  topCategoryId: number,
) => {
  const response = await axiosInstance.put(
    `/category/down/${categoryId}/${topCategoryId}`,
  );
  return response.data.result;
};

// 상위 카테고리 추가 API
export const postTopCategroy = async () => {
  const response = await axiosInstance.post('/category');
  return response.data.result;
};

// 상위 카테고리 추가 API
export const postSubCategroy = async (topCategoryId: number) => {
  const response = await axiosInstance.post(`/category/${topCategoryId}`);
  return response.data.result;
};
