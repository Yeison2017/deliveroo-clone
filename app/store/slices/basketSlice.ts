import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IDish } from "../../interfaces";
import { RootState } from "../store";

export interface BasketState {
  items: Array<IDish>;
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state: BasketState, action: PayloadAction<IDish>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      // state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsWithId = (state: RootState, id: string) => {
  return state.basket.items.filter((item) => item.id === id);
};
