import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Sort = {
  name: string;
  sort: string;
};

type FilterSliceState = {
  activeCategory: number;
  sortValue: Sort;
};

const initialState: FilterSliceState = {
  activeCategory: 0,
  sortValue: {
    name: 'популярности',
    sort: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategory: (state, actions: PayloadAction<number>) => {
      state.activeCategory = actions.payload;
    },
    setSortValue: (state, actions: PayloadAction<Sort>) => {
      state.sortValue = actions.payload;
    },
  },
});

export const { setActiveCategory, setSortValue } = filterSlice.actions;

export default filterSlice.reducer;
