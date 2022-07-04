import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { cardSlice } from "./card/reducers";

export const actions = cardSlice.actions;

export const store = configureStore({
  reducer: {
    cards: cardSlice.reducer,
  },
  middleware: [thunk as ThunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
