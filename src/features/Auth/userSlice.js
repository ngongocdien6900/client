import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'constants/storage-keys';

export const googleLogin = createAsyncThunk('user/googlelogin', async (payload) => {
  const data = await userApi.loginGG(payload);

  localStorage.setItem(StorageKeys.TOKEN, data.token);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

export const facebookLogin = createAsyncThunk('user/facebooklogin', async (payload) => {
  const data = await userApi.loginFB(payload);

  localStorage.setItem(StorageKeys.TOKEN, data.token);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    //thông tin của thằng user đang đăng nhập
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
  },

  //ở đây định nghĩa hàm, tự động tạo ra action type tương ứng
  reducers: {
    logout(state, action) {
      //clear local storage
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);

      state.current = {};
    },
  },

  //async action
  //tự định nghĩa ra
  extraReducers: {
    [googleLogin.fulfilled]: (state, action) => {
      //action.payload là ở trên return ra
      state.current = action.payload;
    },

    [facebookLogin.fulfilled]: (state, action) => {
      //action.payload là ở trên return ra
      state.current = action.payload;
    },
  },
});

// chỉ cần viết reducers ở trên thôi, nó sẽ tự động tạo sẵn cho mình
const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
