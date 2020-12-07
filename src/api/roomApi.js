import axiosClient from './axiosClient';

const roomApi = {
  getAllRoom(data) {
    const url = '/chatroom';
    return axiosClient.get(url, data);
  },


};

export default roomApi;
