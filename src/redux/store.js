import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from './contacts/slice';
import filterReducer from './filters/slice';
// import { contactsApi } from "./services/contactsAPI";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    // [contactsApi.reducerPath]: contactsApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(contactsApi.middleware),
});

