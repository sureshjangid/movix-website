import { configureStore } from "@reduxjs/toolkit";
import home from './home'
export const store = configureStore({
  reducer: {
    home,
  },
});
