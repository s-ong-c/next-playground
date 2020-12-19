import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: true,
});

export default apiClient;
