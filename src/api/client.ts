import axios from 'axios';
import { ENV } from '../config/env';
import toast from 'react-hot-toast';

const baseURL = ENV.API_URL || '/api';

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
