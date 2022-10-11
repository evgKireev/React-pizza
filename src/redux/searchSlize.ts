import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchSliceState = {
  searchInput: string;
};

const initialState: SearchSliceState = {
  searchInput: '',
};
const searchSelect = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchInput: (state, actions: PayloadAction<string>) => {
      state.searchInput = actions.payload;
    },
  },
});

export const { setSearchInput } = searchSelect.actions;

export default searchSelect.reducer;
