import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orderHistory: [], // stores all past orders
  },
  reducers: {
    addOrder: (state, action) => {
      state.orderHistory.push(action.payload);
    },
    clearOrders: (state) => {
      state.orderHistory = [];
    },
  },
});

export const { addOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
