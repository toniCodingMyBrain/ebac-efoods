import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Food } from "../../services/model/restaurants-types";

type Address = {
  name: string;
  street: string;
  city: string;
  cep: string;
  numAddress: string;
  description?: string;
};

type Payment = {
  cardName: string;
  cardNum: string;
  cardCode: string;
  expireMonth: string;
  expireYear: string;
};

interface CheckoutState {
  step: number;
  address: Address;
  payment: Payment;
}

interface FoodState {
  food: Food[];
  isOpen: boolean;
  checkoutState: CheckoutState;
}

const initialState: FoodState = {
  checkoutState: {
    step: 1,
    address: {
      name: "",
      street: "",
      city: "",
      cep: "",
      numAddress: "",
      description: "",
    },
    payment: {
      cardName: "",
      cardNum: "",
      cardCode: "",
      expireMonth: "",
      expireYear: "",
    },
  },
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
