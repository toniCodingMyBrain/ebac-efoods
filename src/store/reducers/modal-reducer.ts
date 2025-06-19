import { createSlice } from "@reduxjs/toolkit";
import { Food } from "../../services/restaurants-types";

interface FoodState {
  food: Food;
  isOpen: boolean;
}

const initialState: FoodState = {
  food: {
    id: 0,
    nome: "",
    descricao: "",
    foto: "",
    porcao: "",
    preco: "",
  },
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    selectFood: (state, action) => {
      state.food = action.payload;
    },
  },
});

export const { openModal, closeModal, selectFood } = modalSlice.actions;
export default modalSlice.reducer;
