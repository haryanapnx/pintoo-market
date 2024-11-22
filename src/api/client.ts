import axios from 'axios';
import { ENV } from '../config/env';

let baseURL = ""
const corsAnywhere = "https://cors-anywhere.herokuapp.com/"
if (process.env.NODE_ENV === 'production') {
    baseURL = corsAnywhere + ENV.API_URL
}

export const apiClient = axios.create({ baseURL });
