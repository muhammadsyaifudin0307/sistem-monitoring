import axios from 'axios';

export const AxiosInstace = axios.create({
  baseURL: 'http://localhost:4000', // Pastikan ini sesuai dengan server Anda
  
});
