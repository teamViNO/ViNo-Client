import { APIResponse } from '@/models/config/axios';
import axiosInstance from './config/instance';
import { ICreateCategoryResponse } from '@/models/category';

// 모든 카테고리 가져오는 API
export const getCategories = async () => {
  const response = await axiosInstance.get('/category');
  return response.data;
};

// 카테고리 별 태그 가져오는 API
export const getCategoryTags = async (categoryId: string) => {
  const response = await axiosInstance.get(`/category/${categoryId}/`);
  return response.data;
};

// 카테고리 이동1 API
export const putSubToOtherTop = async (
  categoryId: number,
  topCategoryId: number,
) => {
  const response = await axiosInstance.put(
    `/category/${categoryId}/${topCategoryId}`,
  );
  return response.data;
};

// 카테고리 이동2 API
export const putSubToTop = async (categoryId: number) => {
  const response = await axiosInstance.put(`/category/up/${categoryId}`);
  return response.data;
};

// 카테고리 이동3 API
export const putTopToOtherTop = async (
  categoryId: number,
  topCategoryId: number,
) => {
  const response = await axiosInstance.put(
    `/category/down/${categoryId}/${topCategoryId}`,
  );
  return response.data;
};

// 상위 카테고리 추가 API
export const postTopCategroy = async (
  name: string,
): Promise<APIResponse<ICreateCategoryResponse>> => {
  const response = await axiosInstance.post('/category', { name });
  return response.data;
};

// 하위 카테고리 추가 API
export const postSubCategroy = async (
  name: string,
  topCategoryId: number,
): Promise<APIResponse<ICreateCategoryResponse>> => {
  const response = await axiosInstance.post(`/category/${topCategoryId}`, {
    name,
  });
  return response.data;
};

// 카테고리 삭제 API
export const deleteCategory = async (category_id: number) => {
  const response = await axiosInstance.delete(`/category/${category_id}`);
  return response.data;
};

// 카테고리 이름 수정 API
export const updateCategoryName = async (name: string, categoryId: number) => {
  const response = await axiosInstance.put(`/category/${categoryId}`, { name });
  return response.data;
};
