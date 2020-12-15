import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    idConversation: '',
    nameConversation: '',
    conversationList: [],
    chat: '',
  },

  reducers: {
    updateIdConversation: (state, action) => {
      state.idConversation = action.payload._id;
      state.nameConversation = action.payload.nameConversation;
    },

    updateConversationList: (state, action) => {
      state.conversationList = action.payload;
    },

    updateLastMessage: (state, action) => {
      const newConversation = action.payload;
      
      const conversationIndex = state.conversationList.conversations.findIndex(conversation => conversation._id === newConversation._id);

      if(conversationIndex >= 0) {
          state.conversationList.conversations[conversationIndex] = newConversation;
      }
    }

  },
});

const { actions, reducer } = contactSlice;
export const { updateIdConversation, updateConversationList, updateLastMessage } = actions;
export default reducer;
