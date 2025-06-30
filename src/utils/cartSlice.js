import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // ✅ Make state an object with "items" key
  },
  reducers: {
    addItemsToCart: (state, action) => {
      state.items.push(...action.payload); // ✅ Add to items array
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload); // ✅ Filter from items
    },
    clearCart: (state) => {
      state.items = []; // ✅ Clear items
    },
  },
});

export const { addItemsToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
