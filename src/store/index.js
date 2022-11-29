import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";
import middleware from "./middleware";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredPaths: ["authedUser", "dialog"],
        ignoredActions: ["authedUser/add", "dialog/openDialog"],
      },
    }).prepend(middleware),
});

export default store;
