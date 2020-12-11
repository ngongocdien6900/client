import axiosClient from './axiosClient';

const messageApi = {

  getMessage: (params) => {
    const url = '/message';
    return axiosClient.get(url, { params });
  },

  saveMessage(data) {
    const url = '/message';
    return axiosClient.post(url, data);
  },


};

export default messageApi;
