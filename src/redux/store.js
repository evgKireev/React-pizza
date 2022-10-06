import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import searchSlize from './searchSlize';
import poginationSlice from './poginationSlice';
import cartSlice from './cartSlice';

export default configureStore({
  reducer: {
    filterSlice,
    searchSlize,
    poginationSlice,
    cartSlice,
  },
});