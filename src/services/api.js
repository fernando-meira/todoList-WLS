import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tarefas.viniciuss.dev',
});

export default api;
