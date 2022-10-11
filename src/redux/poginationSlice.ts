import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PoginationSliceState = {
  poginationSelect: number;
};

const initialState:PoginationSliceState = {
  poginationSelect: 1,
};

const poginationSlice = createSlice({
  name: 'pogination',
  initialState,
  reducers: {
    setPoginationSelect: (state, actions:PayloadAction<number>) => {
      state.poginationSelect = actions.payload;
    },
  },
});

export const { setPoginationSelect } = poginationSlice.actions;
export default poginationSlice.reducer;
