import { Food } from "../../services/models/restaurants-types";

export type Address = {
  name: string;
  street: string;
  city: string;
  cep: string;
  numAddress: string;
  description?: string;
};

export type Payment = {
  cardName: string;
  cardNum: string;
  cardCode: string;
  expireMonth: string;
  expireYear: string;
};

export interface CheckoutState {
  step: number;
  address: Address;
  payment: Payment;
}

export interface FoodState {
  food: Food[];
  isOpen: boolean;
  checkoutState: CheckoutState;
}

export const initialState: FoodState = {
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
