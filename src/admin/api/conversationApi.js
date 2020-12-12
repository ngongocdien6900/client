import axiosClient from './axiosClient';

const conversationApi = {

    getAllConversations() {
        const url = '/';
        return axiosClient.get(url);
    },

}

export default conversationApi;