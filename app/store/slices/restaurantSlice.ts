import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IRestaurants } from "../../interfaces";
import { RootState } from "../store";

interface InitialState {
  resturant: IRestaurants;
}

const initialState: InitialState = {
  resturant: {
    _id: "",
    name: "",
    short_description: "",
    image: null,
    lat: null,
    long: null,
    address: "",
    rating: null,
    type: null,
    dishes: [],
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<IRestaurants>) => {
      state.resturant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: RootState) =>
  state.restaurant.resturant;
