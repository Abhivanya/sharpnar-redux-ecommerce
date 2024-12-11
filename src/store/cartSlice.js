import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
  totalAmount: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existItem = state.cartItems.find((item) => item.id === newItem.id);
      if (existItem) {
        existItem.quantity++;
        existItem.total += existItem.price;
      } else {
        state.cartItems.push({
          id: Date.now(),
          title: newItem.title,
          price: newItem.price,
          total: newItem.price,
          quantity: 1,
        });
      }
      state.totalAmount += newItem.price;
      state.totalCount++;
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
      state.totalAmount -= existingItem.price;
      state.totalCount--;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
