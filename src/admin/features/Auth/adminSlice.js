import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import adminApi from 'admin/api/adminApi';

import StorageKeys from 'admin/constants/storage-keys';

//payload là tham số user truyền vào ở form
export const login = createAsyncThunk('admin/login', async (payload) => {
  //call api to register
  const data = await adminApi.login(payload);

  //save data to localStorage
  localStorage.setItem(StorageKeys.TOKEN, data.token);
  localStorage.setItem(StorageKeys.ADMIN, JSON.stringify(data.admin));

  //return data
  return data.admin;
});

export const forgotPassword = createAsyncThunk('admin/forgotpassword', async (payload) => {
  const data = await adminApi.forgotPassword(payload);
  return data;
});

export const resetPassword = createAsyncThunk('admin/resetpassword', async (payload) => {

  const data = await adminApi.resetPassword(payload);
  return data;
});

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    //thông tin của thằng user đang đăng nhập
    current: JSON.parse(localStorage.getItem(StorageKeys.ADMIN)) || {},
  },

  //ở đây định nghĩa hàm, tự động tạo ra action type tương ứng
  reducers: {
    logout(state, action) {
      //clear local storage
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.ADMIN);

      state.current = {};
    },
  },

  //async action
  //tự định nghĩa ra
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      //action.payload là ở trên return ra
      state.current = action.payload;
    },
  },
});

// chỉ cần viết reducers ở trên thôi, nó sẽ tự động tạo sẵn cho mình
const { actions, reducer } = adminSlice;
export const { logout } = actions;
export default reducer;
