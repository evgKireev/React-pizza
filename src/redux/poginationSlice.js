import { createSlice } from '@reduxjs/toolkit';

const poginationSlice = createSlice({
  name: 'pogination',
  initialState: {
    poginationSelect: 1,
  },
  reducers: {
    setPoginationSelect: (state, actions) => {
      state.poginationSelect = actions.payload;
    },
  },
});

export const { setPoginationSelect } = poginationSlice.actions;
export default poginationSlice.reducer;
