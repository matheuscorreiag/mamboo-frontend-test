import { createSlice } from "@reduxjs/toolkit";
import { CardState } from "./types";

export const initialState: CardState[] = [];

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCards: (state, action) => {
      return [...state, ...action.payload];
    },
    getCards: (state) => {
      return state;
    },
    updateCard: (state, action) => {
      return state.map((card) => {
        if (card.id === action.payload.id) {
          return action.payload;
        }
        return card;
      });
    },
    deleteCard: (state, action) => {
      return state.filter((card) => card.id !== action.payload);
    },
    addCard: (state, action) => {
      return [...state, action.payload];
    },
  },
});
