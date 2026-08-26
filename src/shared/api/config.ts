import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const apiInstance = axios.create({ baseURL: API_BASE_URL, timeout: 30_000 });
