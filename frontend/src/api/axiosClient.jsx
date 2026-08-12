import axios from 'axios';

// Create a single axios instance used by the app
// baseURL '/api' as defined in (vite.config.js -> /api -> backend)
const axiosClient = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
});

export default axiosClient;