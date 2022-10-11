import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filterSlice from './filterSlice';
import searchSlize from './searchSlize';
import poginationSlice from './poginationSlice';
import cartSlice from './cartSlice';
import pizzasSlice from './pizzas.Slice';

export const store = configureStore({
  reducer: {
    filterSlice,
    searchSlize,
    poginationSlice,
    cartSlice,
    pizzasSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
