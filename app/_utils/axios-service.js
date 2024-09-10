/**
 * axios setup to use mock service
 */

import axios from 'axios';

const axiosService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000/',
});

// interceptor for http
axiosService.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services'),
);

export default axiosService;