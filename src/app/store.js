import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'features/Auth/userSlice';
import adminReducer from 'admin/features/Auth/adminSlice'
import chatReducer from 'features/Chat/chatSlice';

const rootReducer = {
  user: userReducer,
  admin: adminReducer,
  chat: chatReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
