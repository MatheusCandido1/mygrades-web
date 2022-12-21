import axios from 'axios';

export const BASE_URL = 'http://localhost:8000/api/v1';

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    if(originalRequest.url === '/auth/logout') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }

    if(error.response.status === 500 && originalRequest.url === '/auth/refresh') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
      return Promise.reject(err);
    }

    if (error.response.status === 401) {
      originalRequest._retry = true;
      return api.post('/auth/refresh', null)
        .then((response) => {
          if (response.status === 201) {
            localStorage.setItem("token", response.data.token);
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            return api(originalRequest);
          }
        })
        .catch((err) => {
          return Promise.reject(err);
        });

    }
  }
)

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



