import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';

const initialState = {
  contacts: {
    list: [],
    filter: '',
  },
};

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = (state = initialState, action) => {
  return {
    contacts: contactsReducer(state.contacts, action),
  };
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
