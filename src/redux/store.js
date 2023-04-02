import { configureStore } from '@reduxjs/toolkit';
import candels from './candelSlice';
import cart from './cartSlice'

export const store = configureStore({
  reducer: {
    candels,
    cart
  },
})