import { configureStore } from "@reduxjs/toolkit";
import detailsSliceReducer from './slices/detailsSlice'
export const store = configureStore({
  reducer:{
    details:detailsSliceReducer,
  }
});
