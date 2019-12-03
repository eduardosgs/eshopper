import axios from 'axios';

const api = axios.create({ baseURL: 'http://painel.supplementstore.com.br/api' });

export default api;