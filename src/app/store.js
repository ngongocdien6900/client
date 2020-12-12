import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'features/Auth/userSlice';
import adminReducer from 'admin/features/Auth/adminSlice'
import chatReducer from 'features/Chat/chatSlice';
import contactReducer from 'admin/features/Contact/contactSlice'
const rootReducer = {
  user: userReducer,
  admin: adminReducer,
  chat: chatReducer,
  contactAdmin: contactReducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
