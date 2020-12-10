import axiosClient from './axiosClient';

const messageApi = {

  getMessage: (params) => {
    const url = '/message';
    return axiosClient.get(url, { params });
  }


};

export default messageApi;
