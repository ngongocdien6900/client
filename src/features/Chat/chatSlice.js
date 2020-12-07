const { createSlice } = require("features/Auth/Login/@reduxjs/toolkit");



const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        lastMessage: {},
    },
    reducers: {

    }
})


const { reducer, actions } = chatSlice
export const { sendMessage } = actions;
export default reducer;