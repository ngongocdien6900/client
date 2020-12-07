import axiosClient from './axiosClient';

const adminApi = {
    login(data) {
        const url = '/login';
        return axiosClient.post(url, data);
    },

    forgotPassword(data) {
        const url = '/forgotpassword';
        return axiosClient.put(url, data);
    },

    resetPassword(data) {
        const url = '/resetpassword';
        return axiosClient.put(url, data);
    }
}

export default adminApi;