import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../models/state-reducer-type";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Food>) => {
      const food = state.food.find((food) => food.id === action.payload.id);
      if (!food) {
        state.food.push(action.payload);
        state.checkoutState.products.push({
          id: action.payload.id,
          price: Number(action.payload.preco),
        });
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
    //! Reducers de checkout
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    resetCheckout: () => {
      return initialState;
    },
  },
});

export const { addToCart, removeFromCart, openCart, closeCart, setStep, resetCheckout } =
  cartSlice.actions;
export default cartSlice.reducer;
