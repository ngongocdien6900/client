import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    //thông tin của thằng user đang đăng nhập
    messageLatest : [],
  },

  reducers: {

    },
  },

);


const { actions, reducer } = chatSlice;
export const { logout } = actions;
export default reducer;
