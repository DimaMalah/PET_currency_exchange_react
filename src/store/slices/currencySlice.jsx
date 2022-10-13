import { createSlice } from '@reduxjs/toolkit'


const rateOfUAH = {rate: 1,cc:"UAH"}

const initialState = {
  data:[],
  usd: 0,
  uah: 0,
  eur: 0,
	errors:""
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
	 dataJson: (state, {payload})=> {state.data = [rateOfUAH,...payload]},
    usdRate: (state, {payload}) => {state.usd = payload},
    eurRate: (state, {payload}) => {state.eur = payload},
		error: (state, {payload}) => {state.errors = payload}
  },
})

export const { usdRate, eurRate, dataJson, error } = currencySlice.actions

export default currencySlice.reducer