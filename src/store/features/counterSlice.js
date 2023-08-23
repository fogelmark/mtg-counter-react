import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 40
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1
    }
  }
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer