import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  startDate: number | null;
}

const initialState: CounterState = {
  startDate: null,
};

export const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setStartTimestamp: (state, action: PayloadAction<number>) => {
      state.startDate = action.payload;
    },
  },
});

export const { setStartTimestamp } = appReducer.actions;

export default appReducer.reducer;
