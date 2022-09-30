import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state, action: PayloadAction<number>) => {
            return state + action.payload;
        },
        decrease: (state, action: PayloadAction<number>) => {
            return state - action.payload;
        },
        bankrupt: () => {
            return 0;
        },
    },
});

export const { increase, decrease, bankrupt } = counterSlice.actions;

export default counterSlice.reducer;
