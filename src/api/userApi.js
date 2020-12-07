import axiosClient from './axiosClient';

const userApi = {
  loginGG(data) {
    const url = '/auth/googlelogin';
    return axiosClient.post(url, data);
  },

  loginFB(data) {
    const url = '/auth/facebooklogin';
    return axiosClient.post(url, data);
  },
};

export default userApi;
