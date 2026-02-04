import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    surveyResults: [], // Pastikan ejaannya benar
};

const surveySlice = createSlice({
    name: "surveyResults",
    initialState,
    reducers: {
        addData: (state, action) => {
            state.surveyResults.push(action.payload);
        },
        removeData: (state, action) => {
            state.surveyResults = state.surveyResults.filter(
                (_, index) => index !== action.payload
            );
        },
    },
});

export const { addData, removeData } = surveySlice.actions;
export default surveySlice.reducer;