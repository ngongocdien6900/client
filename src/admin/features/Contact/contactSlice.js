import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    idConversation: '',
    nameConversation: '',
    conversationList: [],
    chat: '',
    conversationSearch: [],
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
      const { conversations } = state.conversationList;
      const newConversation = action.payload;

      const conversationIndex = conversations.findIndex((conversation) => conversation._id === newConversation._id);

      if (conversationIndex >= 0) {
        conversations[conversationIndex] = newConversation;
      }
    },

    showConversation: (state, action) => {
      const { conversations } = state.conversationList;
      const newConversation = action.payload;

      const conversationIndex = conversations.findIndex((conversation) => conversation._id === newConversation._id);

      if (conversationIndex < 0) {
        conversations.push(newConversation);
      }
    },

    searchConversation: (state, action) => {
      const { conversations } = state.conversationList;
      const search = action.payload;
      const conversationFilter = conversations.filter((conversation) => {
        if (search === '') return conversation;
        return conversation.nameConversation.toLowerCase().indexOf(search.toLowerCase()) !== -1;
      });

      if(!conversationFilter.length) return;
      state.conversationSearch = conversationFilter;
    },

  },
});

const { actions, reducer } = contactSlice;
export const {
  updateIdConversation,
  updateConversationList,
  updateLastMessage,
  showConversation,
  searchConversation,
} = actions;
export default reducer;
