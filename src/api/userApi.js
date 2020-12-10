import axiosClient from './axiosClient';

const userApi = {
  loginGG(data) {
    const url = '/googlelogin';
    return axiosClient.post(url, data);
  },

  loginFB(data) {
    const url = '/facebooklogin';
    return axiosClient.post(url, data);
  },

  getMessage(param) {
    const url = '/message';
    return axiosClient.get(url, param);
  }
};

export default userApi;
