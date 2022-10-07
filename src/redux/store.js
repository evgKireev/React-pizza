import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import searchSlize from './searchSlize';
import poginationSlice from './poginationSlice';
import cartSlice from './cartSlice';
import pizzasSlice from './pizzas.Slice';

export default configureStore({
  reducer: {
    filterSlice,
    searchSlize,
    poginationSlice,
    cartSlice,
    pizzasSlice,
  },
});
