import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CovidSummary from "../services/covid-summary.service";

const initialState = {
    covidSummaryData: {},
    loading: "idle",
  };

export const getCovidSummary = createAsyncThunk(
  "get/covid-summary",
  async () => {
    const res = await CovidSummary.getCovidSummary();
    return res.data;
  }
);

const covidSummarySlice = createSlice({
  name: "covidSummary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCovidSummary.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(getCovidSummary.fulfilled, (state, action) => {
        state.loading = "idle";
        state.covidSummaryData = action.payload;
      });
  },
});

export const getCovidSummaryData = (state:any) => state.covidSummary.covidSummaryData;

const { reducer } = covidSummarySlice;
export default reducer;
