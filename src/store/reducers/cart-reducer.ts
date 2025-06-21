import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Food } from "../../services/restaurants-types";

interface FoodState {
  food: Food[];
  isOpen: boolean;
}

const initialState: FoodState = {
  food: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Food>) => {
      const food = state.food.find((food) => food.id === action.payload.id);
      if (!food) {
        state.food.push(action.payload);
      } else {
        alert("Esse item já está no carrinho");
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.food = state.food.filter((food) => food.id !== action.payload);
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const { addToCart, removeFromCart, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
