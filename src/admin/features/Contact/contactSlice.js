import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    idConversation: '',
    conversationList: [],
  },

  reducers: {
    updateIdConversation(state, action) {
      state.idConversation = action.payload;
    },

    updateConversationList(state, action) {
      state.conversationList = action.payload;
    },

    addNewConversation(state, action) {
      const newConversation = action.payload;
      state.conversationList.push(newConversation);
    }

  },
});

const { actions, reducer } = contactSlice;
export const { updateIdConversation, updateConversationList, addNewConversation } = actions;
export default reducer;
