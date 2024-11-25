import axios from 'axios';
import toast from 'react-hot-toast';

let baseURL = '';
if (process.env.NODE_ENV === 'production') {
  baseURL = '/api';
}

export const apiClient = axios.create({ baseURL });
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(
      error.response?.data?.message || 'An unexpected error occurred'
    );
    return Promise.reject(error);
  }
);
