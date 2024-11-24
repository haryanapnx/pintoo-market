import axios from 'axios';
import { ENV } from '../config/env';
import toast from 'react-hot-toast';

let baseURL = ""
const corsAnywhere = "https://cors-anywhere.herokuapp.com/"
if (process.env.NODE_ENV === 'production') {
    baseURL = corsAnywhere + ENV.API_URL
}

export const apiClient = axios.create({ baseURL });
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        toast.error(
            error.response?.data?.message || "An unexpected error occurred"
        );
        return Promise.reject(error);
    }
);

