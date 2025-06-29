import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemsToCart: (state, action) => {
      return [...state, ...action.payload];
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addItemsToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
