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
    addToBasket: (state, action: PayloadAction<IDish>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action: PayloadAction<{ _id: string }>) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload._id}) as its not in basket`
        );
      }

      state.items = newBasket;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsWithId = (state: RootState, id: string) =>
  state.basket.items.filter((item) => item._id === id);

export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);
