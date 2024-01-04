import axios from 'axios';

export const getAllExamples = async () => {
  return (await axios.get('EXAMPLE_URL')).data;
};
