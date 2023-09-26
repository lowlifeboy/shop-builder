import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AccountAddressSchema, type AccountAddressesState } from '../types/accountAddresses'
import { fetchAccountAddresses } from '../services/fetchAccountAddresses/fetchAccountAddresses'

const initialState: AccountAddressesState = {
  isLoading: false,
  data: undefined,
  error: undefined
}

export const accountAddressesSlice = createSlice({
  name: 'accountAddresses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch accountAddresses data
      .addCase(fetchAccountAddresses.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAccountAddresses.fulfilled, (state, action: PayloadAction<AccountAddressSchema[]>) => {
        state.isLoading = false
        state.error = undefined
        state.data = action.payload
      })
      .addCase(fetchAccountAddresses.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: accountAddressesActions, reducer: accountAddressesReducer } = accountAddressesSlice
