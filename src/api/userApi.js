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


};

export default userApi;
