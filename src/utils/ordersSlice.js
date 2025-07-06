// src/utils/ordersSlice.js
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
    cancelOrder: (state, action) => {
      const orderId = action.payload;
      state.orderHistory = state.orderHistory.filter(order => order.id !== orderId);
    },
  },
});

//  Make sure `cancelOrder` is exported
export const { addOrder, clearOrders, cancelOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
