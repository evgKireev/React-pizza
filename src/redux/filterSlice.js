import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    activeCategory: 0,
    sortValue: {
      name: 'популярности',
      sort: 'rating',
    },
  },
  reducers: {
    setActiveCategory: (state, actions) => {
      state.activeCategory = actions.payload;
    },
    setSortValue: (state, actions) => {
      state.sortValue = actions.payload;
    },
  },
});

export const { setActiveCategory, setSortValue } = filterSlice.actions;

export default filterSlice.reducer;
