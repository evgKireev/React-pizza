import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type Pizza = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

type PizzasSliseState = {
  data: Pizza[];
  status: string;
};

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchTodosStatus',
  async ({
    order,
    categories,
    sort,
    poginationSelect,
  }: Record<string, string>) => {
    const { data } = await axios.get(
      `https://6336e7175327df4c43cbdd5f.mockapi.io/items?page=${poginationSelect}&limit=4&${categories}&sortBy=${sort}&order=${order}`
    );
    return data as Pizza[];
  }
);

const initialState: PizzasSliseState = {
  data: [],
  status: 'pending',
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas: (state, actions) => {
      state.data = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'pending';
      state.data = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'rejected';
      state.data = [];
    });
  },
});
export const { setPizzas } = pizzasSlice.actions;
export default pizzasSlice.reducer;
