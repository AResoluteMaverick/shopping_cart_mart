import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import loggerMiddleware from './loggerMiddleware';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
})