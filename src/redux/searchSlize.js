import { createSlice } from '@reduxjs/toolkit';

const searchSelect = createSlice({
  name: 'search',
  initialState: {
    searchInput: '',
  },
  reducers: {
    setSearchInput: (state, actions) => {
      state.searchInput = actions.payload;
    },
  },
});

export const { setSearchInput } = searchSelect.actions;

export default searchSelect.reducer;
