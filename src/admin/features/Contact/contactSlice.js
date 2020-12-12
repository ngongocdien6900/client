import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    idConversation: '',
  },

  reducers: {
    updateIdConversation(state, action) {
      state.idConversation = action.payload;
  },
  },
});

const { actions, reducer } = contactSlice;
export const { updateIdConversation } = actions;
export default reducer;
