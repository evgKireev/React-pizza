import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchTodosStatus',
  async ({ order, categories, sort, poginationSelect }) => {
    const { data } = await axios.get(
      `https://6336e7175327df4c43cbdd5f.mockapi.io/items?page=${poginationSelect}&limit=4&${categories}&sortBy=${sort}&order=${order}`
    );
    return data;
  }
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState: {
    data: [],
    status: 'pending',
  },
  reducers: {
    setPizzas: (state, actions) => {
      state.data = actions.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state, actions) => {
      state.status = 'pending';
      state.data = [];
    },
    [fetchPizzas.fulfilled]: (state, actions) => {
      state.data = actions.payload;
      state.status = 'fulfilled';
    },
    [fetchPizzas.rejected]: (state, actions) => {
      state.status = 'rejected';
      state.data = [];
    },
  },
});
export const { setPizzas } = pizzasSlice.actions;
export default pizzasSlice.reducer;
