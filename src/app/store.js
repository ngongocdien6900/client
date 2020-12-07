import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'features/Auth/userSlice';
import adminReducer from 'admin/features/Auth/adminSlice'

const rootReducer = {
  user: userReducer,
  admin: adminReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
