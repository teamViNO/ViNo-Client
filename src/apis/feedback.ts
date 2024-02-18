import axiosInstance from './config/instance';

export const postFeedback = async (text: string) => {
  const response = await axiosInstance.post('/feedback', { text });
  return response;
};
