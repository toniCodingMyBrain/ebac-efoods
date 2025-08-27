import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Food } from "../../services/models/restaurants-types";
import { Address, initialState, Payment } from "../models/states-reducer-types";

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
    //! Reducers de checkout
    setStep: (state, action: PayloadAction<number>) => {
      state.checkoutState.step = action.payload;
    },
    setAddress: (state, action: PayloadAction<Address>) => {
      state.checkoutState.address = action.payload;
    },
    setPayment: (state, action: PayloadAction<Payment>) => {
      state.checkoutState.payment = action.payload;
    },
    resetCheckout: () => {
      return initialState;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  openCart,
  closeCart,
  setStep,
  setAddress,
  setPayment,
  resetCheckout,
} = cartSlice.actions;
export default cartSlice.reducer;
