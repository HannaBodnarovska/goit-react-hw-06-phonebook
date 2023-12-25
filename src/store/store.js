import { configureStore } from '@reduxjs/toolkit';
import  contactsReducer  from './contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;