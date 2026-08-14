import axios from 'axios';

import { getAuthToken, clearAuth } from '../auth/auth';

// Create a single axios instance used by the app
// baseURL '/api' as defined in (vite.config.js -> /api -> backend)
const axiosClient = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
});

// Attach latest token to every request
axiosClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    } else if (config.headers) {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Central 401 handling: clear token (and optionally trigger redirect)
axiosClient.interceptors.response.use(
  (resp) => resp,
  (error) => {
    if (error?.response?.status === 401) {
      clearAuth();
      console.log(error)
    }
    return Promise.reject(error);
  }
);

export default axiosClient;