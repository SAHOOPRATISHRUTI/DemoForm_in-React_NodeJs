import axios from 'axios';

const API_URL = 'http://localhost:2022/submit';

export const submitFormData = async (formdata) => {
  try {
    const response = await axios.post(API_URL, formdata);
    return response.data; 
  } catch (error) {
    throw error; 
  }
};
