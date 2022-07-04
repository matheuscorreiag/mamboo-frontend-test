import { createSlice } from "@reduxjs/toolkit";
import { CardState } from "./types";

export const initialState: CardState[] = [];

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action) => {
      return [...state, ...action.payload];
    },
    getCards: (state) => {
      return state;
    },
  },
});
