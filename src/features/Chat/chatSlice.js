const { createSlice } = require("@reduxjs/toolkit");

const initialMessage = [
    {
        id: 86160,
        sender: 'Thanh Uyen',
        message: 'Chào bạn'
    },
    {
        id: 86167,
        sender: 'Ngô Ngọc Điện',
        message: 'Hi'
    },
    {
        id: 861601,
        sender: 'Thanh Uyen',
        message: 'Bạn cần tư vấn gì không?'
    },
    {
        id: 861260,
        sender: 'Ngô Ngọc Điện',
        message: 'Dạ không nhé.'
    },
    {
        id: 876160,
        sender: 'Thanh Uyen',
        message: 'Ok la'
    },
    {
        id: 860160,
        sender: 'Ngô Ngọc Điện',
        message: 'Ok lun'
    },
    {
        id: 860660,
        sender: 'Ngô Ngọc Điện',
        message: 'Ok lun hihihihi'
    },
]

const chatSlice = createSlice({
    name: 'chat',
    initialState: [],
    reducers: {
        addMessage: (state, action) => {
            const newMessage = action.payload;
            state.push(newMessage);
        }
    }
})


const { reducer, actions } = chatSlice
export const { addMessage } = actions;
export default reducer;