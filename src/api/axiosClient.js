import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  //khi gọi api chỉ cần chỉ định ở sau thôi
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log(error);
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    //lấy data của response thôi, còn lại không quan tâm
    return response.data;
  },
  function (error) {
    const { data, config } = error.response;
    const URLS = ['/facebooklogin', '/googlelogin'];
    if (URLS.indexOf(config.url)) {
      throw new Error(data.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
