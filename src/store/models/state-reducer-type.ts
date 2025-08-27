export interface FoodState {
  isOpen: boolean;
  step: number;
  food: Food[];
  checkoutState: PurchasePayload;
}

export const initialState: FoodState = {
  checkoutState: {
    products: [],
    delivery: {
      receiver: "",
      address: {
        description: "",
        city: "",
        zipCode: "",
        number: 1,
        complement: "",
      },
    },
    payment: {
      card: {
        name: "",
        number: "",
        code: 1,
        expires: {
          month: 1,
          year: 1,
        },
      },
    },
  },
  food: [],
  isOpen: false,
  step: 1,
};
