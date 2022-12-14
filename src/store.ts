import { configureStore } from '@reduxjs/toolkit'
import covidSummaryReducer from './slices/CovidSummarySlice';

const reducer = {
  covidSummary: covidSummaryReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;